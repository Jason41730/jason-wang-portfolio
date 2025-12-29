# 設定說明 (Setup Instructions)

## 1. Cloudinary 設定

### 步驟：
1. 前往 [Cloudinary 官網](https://cloudinary.com/) 註冊帳號（免費方案即可）
2. 登入後，在 Dashboard 可以看到以下資訊：
   - **Cloud Name** (例如: `dxxxxx`)
   - **API Key** (例如: `123456789012345`)
   - **API Secret** (例如: `abcdefghijklmnopqrstuvwxyz`)

3. 在專案根目錄的 `.env` 檔案中添加：
   ```
   CLOUDINARY_CLOUD_NAME=你的_cloud_name
   CLOUDINARY_API_KEY=你的_api_key
   CLOUDINARY_API_SECRET=你的_api_secret
   ```

### 用途：
- 用於 `/photos/admin` 頁面上傳照片
- 照片會自動儲存在 Cloudinary 的 `portfolio-photos` 資料夾中

---

## 2. Resend 設定

### 步驟：
1. 前往 [Resend 官網](https://resend.com/) 註冊帳號
2. 在 Dashboard 中：
   - 點擊 "API Keys" 建立新的 API Key
   - 複製 API Key（只會顯示一次，請妥善保存）

3. **驗證郵箱或網域**（重要）：
   - 如果使用免費方案，可以使用 Resend 提供的測試郵箱（例如：`onboarding@resend.dev`）
   - 如果要使用自己的郵箱，需要在 Resend 中驗證你的網域

4. 在專案根目錄的 `.env` 檔案中添加：
   ```
   RESEND_API_KEY=你的_resend_api_key
   CONTACT_EMAIL=你要接收聯絡表單的郵箱（例如：Jason41730@gmail.com）
   RESEND_FROM_EMAIL=onboarding@resend.dev
   ```

   **注意**：
   - `CONTACT_EMAIL`: 這是接收聯絡表單的郵箱地址
   - `RESEND_FROM_EMAIL`: 如果使用免費方案，可以用 `onboarding@resend.dev`；如果有驗證網域，可以用你自己的郵箱

### 用途：
- 用於 `/contact` 頁面發送聯絡表單郵件

---

## 3. Admin 密碼設定

在 `.env` 檔案中添加：
```
ADMIN_PASSWORD=你的管理員密碼
```

### 用途：
- 用於 `/photos/admin` 頁面的身份驗證

---

## 完整的 .env 範例

```env
# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Resend
RESEND_API_KEY=re_xxxxxxxxxxxxx
CONTACT_EMAIL=Jason41730@gmail.com
RESEND_FROM_EMAIL=onboarding@resend.dev

# Admin
ADMIN_PASSWORD=your_secure_password
```

---

## 設定完成後

1. 確保 `.env` 檔案在 `.gitignore` 中（已經設定好了）
2. 重新啟動開發伺服器：
   ```bash
   yarn dev
   ```
3. 測試功能：
   - 訪問 `/photos/admin` 測試照片上傳
   - 訪問 `/contact` 測試聯絡表單

---

## 注意事項

- **不要將 `.env` 檔案提交到 GitHub**
- API Keys 和 Secrets 都是敏感資訊，請妥善保管
- 如果使用免費方案，可能有限制（例如：Resend 免費方案每天有發送數量限制）


