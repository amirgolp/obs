# Minimalist Itachi Uchiha OBS Stream Pack

An ultra-sleek, minimalist stream overlay pack and scene collection designed for live coding, tech development, and gaming broadcasts in **OBS Studio**.

Featuring subtle crimson hairline accents (`#e11d48`), deep matte obsidian backgrounds, and discreet Uchiha clan iconography with generous negative space.

---

## 🎨 Included Scenes

1. **Starting Soon** — Deep charcoal background with subtle glowing crimson crescent, solitary raven silhouette, and clean typography (`STARTING SOON / 間もなく開始`).
2. **Main — Live Coding** — Expansive IDE display area (over 76% screen real estate) with 1.5px crimson hairline border, corner webcam frame, Twitch chat container, and header event ticker.
3. **Just Chatting** — Large 16:9 central webcam frame with subtle Uchiha crest and side chat container.
4. **Be Right Back** — Moody cliff silhouette, glowing eclipse ring, and spacious dark atmosphere (`BE RIGHT BACK / 少々お待ちください`).
5. **Intermission** — Minimalist glowing crimson divider on dark slate (`INTERMISSION / LIVE CODING BREAK`).
6. **Dual Screen** — Balanced side-by-side frames for Display 1 (Code) and Display 2 (Browser/Docs) with lower-center webcam.
7. **Collab Cam** — Dual balanced Host & Guest webcam frames with center Uchiha crest.
8. **Stream Ending** — Solitary crow gliding across a crimson ring with minimalist outro text (`STREAM ENDED / ご視聴ありがとうございました`).

---

## 📁 Repository Structure

```
obs/
├── overlays/                         # High-resolution 1080p PNG overlays & frames
│   ├── starting_soon.png
│   ├── be_right_back.png
│   ├── intermission.png
│   ├── stream_ending.png
│   ├── main_coding_overlay.png
│   ├── main_coding_bg.png
│   ├── just_chatting_overlay.png
│   ├── just_chatting_bg.png
│   ├── dual_screen_overlay.png
│   ├── dual_screen_bg.png
│   ├── collab_cam_overlay.png
│   ├── collab_cam_bg.png
│   ├── webcam_frame.png
│   ├── top_bar.png
│   └── chat_box_frame.png
├── scenes/
│   └── Itachi Uchiha - Live Coding.json   # Full OBS Studio scene collection
└── README.md
```

---

## 🚀 How to Import into OBS Studio

1. **Copy Overlays**:
   Copy the contents of `overlays/` to your local OBS overlays directory:
   `%APPDATA%\obs-studio\overlays\uchiha-itachi\`

2. **Import Scene Collection**:
   - Open **OBS Studio**.
   - In the top menu bar, click **Scene Collection** → **Import**.
   - Select `scenes/Itachi Uchiha - Live Coding.json`.
   - In **Scene Collection**, click **Itachi Uchiha - Live Coding** to activate.

3. **Configure Devices**:
   - Select your webcam in the Video Capture Device properties.
   - Select your screen in the Display Capture properties.
   - Paste your Twitch/Streamlabs alert and chat widget URLs into the browser sources if needed.
