// Re-export badgemagic library for use in Tauri commands
pub use badgemagic;
use badgemagic::{
    embedded_graphics::{
        self, geometry::Point, mono_font::MonoTextStyle, pixelcolor::BinaryColor, text::Text
    },
    protocol::{Mode, PayloadBuffer, Style},
    usb_hid::Device as UsbHidDevice,
    ble::Device as BleDevice,
};

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
  tauri::Builder::default()
    .setup(|app| {
      if cfg!(debug_assertions) {
        app.handle().plugin(
          tauri_plugin_log::Builder::default()
          .level(log::LevelFilter::Info)
          .build(),
        )?;
      }
      Ok(())
    })
    .invoke_handler(tauri::generate_handler![send_to_badge])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

#[tauri::command]
async fn send_to_badge(message: String, use_usb: bool) -> Result<(), String> {
    // Use badgemagic library functions here

    let mut payload = PayloadBuffer::new();

    payload.add_message_drawable(
        Style::default().mode(Mode::Center),
        &Text::new(
            &message,
            Point::new(0, 8),
            MonoTextStyle::new(
                &embedded_graphics::mono_font::iso_8859_1::FONT_6X9,
                BinaryColor::On,
            ),
        ),
    );

    if use_usb {
        UsbHidDevice::single()
            .map_err(|e| e.to_string())?
            .write(payload)
            .map_err(|e| e.to_string())?;
    } else {
        BleDevice::single(None)
            .await
            .map_err(|e| e.to_string())?
            .write(payload)
            .await
            .map_err(|e| e.to_string())?;
    }

    Ok(())
}