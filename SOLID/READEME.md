## Single Respomsibility.js & logger.js

### 單一職責原則（SRP）：

CalorieTracker 類別僅負責跟蹤卡路里的消耗，並在達到最大卡路里限制時發出警告。這個類別專注於一個功能，即卡路里跟蹤，這符合單一職責原則。
logMessage 函式（在 logger.js 模塊中）負責記錄消息到控制台，也只有這一個責任。

### 開放封閉原則（OCP）：

CalorieTracker 類別是開放的，因為我們可以通過繼承和覆寫方法來擴展它的行為，而不需要修改它的源代碼。例如，如果我們想要在達到最大卡路里限制時執行其他操作，我們可以創建一個新的子類並覆寫 trackCalories 方法，而不需要修改 CalorieTracker 類別本身。
logMessage 函式也是封閉的，因為它的實現是固定的，但是其他模塊可以使用它來記錄消息而不需要修改它的源代碼。
