# ViteAngular19TodoProject

該項目是使用生成的 [Angular CLI](https://github.com/angular/angular-cli) version 19.2.3.

## Development server 開發伺服器

若要啟動本機開發伺服器，請執行:

```bash
ng serve
```
伺服器運行後，打開瀏覽器並導航至“http://localhost:4200/”。無論何時修改任何來源文件，應用程式都會自動重新載入。
Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding 程式碼腳手架

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:
Angular CLI 包含強大的程式碼腳手架工具。若要產生新元件，請執行：

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:
若要取得可用原理圖的完整清單（例如「元件」、「指令」或「管道」），請執行：
```bash
ng generate --help
```

## Building 打包

To build the project run:
要建置項目，請運行：
```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.
這將編譯您的專案並將建置工件儲存在“dist/”目錄中。預設情況下，生產版本會優化應用程式的效能和速度。
## Running unit tests 運行單元測試

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:
若要使用 [Karma](https://karma-runner.github.io) 測試執行器執行單元測試，請使用下列指令：
```bash
ng test
```

## Running end-to-end tests 運行端對端測試

For end-to-end (e2e) testing, run:
對於端對端 (e2e) 測試，運行：
```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.
Angular CLI 預設沒有附帶端對端測試框架。您可以選擇一個適合您的需求。
## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
有關使用 Angular CLI 的更多信息，包括詳細的命令參考，請訪問 [Angular CLI 概述和命令參考](https://angular.dev/tools/cli) 頁面。


# Angular Material快速建立各種元件
安裝
```
ng add @angular/material
```
 Determining Package Manager
✔ Determining Package Manager
✔ Determining Package Manager
✔ Determining Package Manager
✔ Determining Package Manager
✔ Determining Package Manager
  › Using package manager: npm
✔ Searching for compatible package version
  › Found compatible package version: @angular/material@19.2.3.
✔ Loading package information from registry
✔ Confirming installation
✔ Installing package
✔ Choose a prebuilt theme name, or "custom" for a custom theme: Azure/Blue      
   [Preview: https://material.angular.io?theme=azure-blue]
? Set up global Angular Material typography styles? (y/N)

ex 創建頁面或是功能
```
ng g c 頁面或是功能
ng g c ToDo
```
生成的檔案會是『大寫小寫英文-大寫小寫英文.component』副檔名會有
<ul>
  <li>.html:HTML檔案</li>
  <li>.scss:樣式</li>
  <li>.spec.ts:單元測試檔案</li>
  <li>.ts:資料定義與函式</li>
</ul>
