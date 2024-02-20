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

### 介面隔離原則（ISP）:

- 介面隔離原則（Interface Segregation Principle，ISP）是 SOLID 原則中的一部分，它指導著將一個龐大的介面拆分為更小的、更具體的接口，以確保類別不會依賴它們不需要的介面。在以上程式碼中，雖然沒有明確的介面定義，但我們可以透過角色的行為來理解 ISP。

- 首先，讓我們來看看 mover 物件和 attacker 物件。mover 定義了一個 move()方法，用於使實體移動，而 attacker 定義了一個 attack()方法，用於實體攻擊其他實體。這兩個行為是獨立的，它們分別表示移動和攻擊這兩種不同的行為。

- 然後，我們看到 hasHealth 對象，它定義了一個 takeDamage()方法，用於處理實體受到傷害後的邏輯。這個方法與移動和攻擊是不同的，它是實體的生命狀態管理的一部分。

- 在 Character 類別中，我們將這些行為和屬性組合在一起，使角色具有移動、攻擊和生命狀態管理的功能。但是，當我們將這些行為添加到 Wall 和 Turrent 類別中時，我們只添加了它們需要的行為，而沒有將不必要的行為引入。

總的來說，ISP 的思想在這裡體現在將不同的行為分開，並且只在需要時將它們組合在一起。這樣做有助於減少類別之間的耦合度，使程式碼更加靈活和易於維護。
