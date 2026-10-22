# 拾光 × Moment Studio V5.86（整理版）

本版從 V5.85 整理而來，保留既有功能；整理部署檔與說明文件，不改動照片剪輯、音樂、封面與匯出的主要執行邏輯。

## 檔案內容
- `index.html`：主程式入口，**一定要放在 GitHub Pages 儲存庫根目錄**。
- `app.js`、`engine.js`、`fusion.js`、`upgrade-*.js`、`timeline-*.js` 等：各功能的 JavaScript 原始碼。檔名保留原樣，以維持原有載入順序與跨檔關聯。
- `style.css`、`mobile-v557.css`：電腦、手機與平板樣式。
- `assets/`：主題與插畫資源。
- `music-center/`：內嵌音樂功能與資源；不能只上傳 `index.html`。
- `beat-worker.js`：節奏分析背景工作程式。
- `.nojekyll`：GitHub Pages 靜態資源設定。

## GitHub Pages 部署
1. 解壓縮 ZIP，將其中 **全部檔案與資料夾** 上傳到 GitHub 儲存庫根目錄（不是只上傳 ZIP）。
2. GitHub 儲存庫 Settings → Pages → Build and deployment → Deploy from a branch。
3. 選擇 `main` 和 `/(root)`，儲存後開啟 Pages 提供的網址。
4. 如果手機仍看到舊版，重新載入並視情況清除該網站快取。

## 使用注意
- 建議先用 720p 輸出短影片，驗證裝置上的預覽與聲音，再嘗試 1080p。
- MP4／WebM 能否編碼及分享，取決於瀏覽器、作業系統與目的地 App 的能力。
- 本版不含先前移除的「LINE 電腦版影片相容模式」與專用說明面板。
- 音樂網站下載功能依賴對方授權、服務可用性及瀏覽器跨來源限制。
- 手機上的 LINE 影片縮圖顯示，應由 LINE 的照片／影片入口實際測試，系統不能保證對方聊天視窗呈現方式。
- 現有已導入的照片通常存在瀏覽器運行記憶體，重新整理前請儲存必要的輸出／專案。

## 驗證範圍
本版已對所有 `.js` 做語法檢查，核對首頁所引用的本地 CSS／JS／iframe 路徑，並檢查 ZIP 壓縮完整性。**未聲稱完成 Windows、iPhone、Android 或 LINE 真機的完整剪輯與分享測試。**
