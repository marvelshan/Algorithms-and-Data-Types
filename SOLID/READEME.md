## Single Respomsibility.js & logger.js

Learning from Web Dev Simplified [YouTube video](https://www.youtube.com/@WebDevSimplified)

[SRP](https://youtu.be/UQqY3_6Epbg?si=9XVgPmdjhbxuH-Om)
[OCP](https://youtu.be/-ptMtJAdj40?si=EkcBJC9devR87bqS)

### 單一職責原則（SRP）：

- 每個類別應該僅有一個變更的理由：在這個例子中，CalorieTracker 類別負責追蹤卡路里的攝取，並且當攝取超出最大允許值時發送一條日誌訊息。這個類別只有一個變更的理由，即卡路里的追蹤和超出限制的處理。這使得類別具有清晰的職責，易於理解和維護。

- 將相關的功能放在一起：CalorieTracker 類別將卡路里追蹤和超出限制的處理功能組織在一起。這樣做有助於提高程式碼的可讀性和可維護性，因為相關的功能被集中在同一個地方，而不是分散在多個地方。

### 開放封閉原則（OCP）：

- 開放（Open）：表示軟體實體（例如類別、模組、函式等）應該對擴展開放，即它們的行為應該能夠在不修改現有程式碼的情況下進行擴展。在這個範例中，當我們想要新增不同類型的問題時（如布林問題、多選問題、文字問題、範圍問題），我們只需要新增新的類別，而不需要修改 printQuiz 函式。

- 封閉（Closed）：表示軟體實體應該對修改封閉，即已經存在的程式碼在新增功能時不應該被修改。在這個範例中，新增了 BooleanQuestion、MultipleChoiceQuestion、TextQuestion 和 RangeQuestion 這些類別，但沒有修改原本的 printQuiz 函式。這使得程式碼容易擴展，同時不會破壞原有的功能或相依於具體的實作細節。

### 里氏替換原則（LSP）:

**子類應該能夠替換父類並且不影響程式的正確性。**

- 子類 Duck 和 Penguin 都能夠替換它們的父類 FlyingBird 和 SwimmingBird，而不會對 makeFlyingBirdFly 和 makeSwimmingBirdSwim 函數的執行產生任何影響。
- Duck 作為 FlyingBird 的子類，它繼承了 fly 方法，同時添加了自己的 quack 方法，但這並不影響 Duck 的實例在 makeFlyingBirdFly 函數中的使用。
- Penguin 作為 SwimmingBird 的子類，它沒有定義 fly 方法，但這並不影響 Penguin 的實例在 makeSwimmingBirdSwim 函數中的使用。
