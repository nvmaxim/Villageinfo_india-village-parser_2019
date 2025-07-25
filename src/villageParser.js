// Villageinfo_india-village-parser_2019
// Парсер данных о деревнях с портала Mission Antyodaya

function constantCycleLoop() {
    // Получаем активную таблицу Google Sheets
    var ss = SpreadsheetApp.getActive();
    var sheet = ss.getSheetByName("ImportSheet");

    // Базовые URL и параметры
    var dist = "/ma2019/preloginMaDataUploadSummaryDistrict.html?stateCode=21&districtCode=347";
    var state = "https://missionantyodaya.nic.in";

    // Создаем лист "ImportSheet", если он не существует
    if (!sheet) {
        sheet = ss.insertSheet("ImportSheet");
    }

    var strokeNum = 1; // Счетчик строк

    // Получаем данные первого уровня (регионы)
    sheet.getRange(1, 1).setValue(
        '=IMPORTXML("' + state + dist + '"; "//html/body/div/div/div/div/table/tbody/tr/td/a[contains(@class, \'aclass\')]/@href")'
    );
    var a = sheet.getRange(2, 1).getValue();

    // Получаем данные второго уровня (подрегионы)
    sheet.getRange(1, 2).setValue(
        '=IMPORTXML("' + state + a + '"; "//html/body/div/div/div/div/table/tbody/tr/td/a[contains(@class, \'aclass\')]/@href")'
    );
    var aa = sheet.getRange(1, 2).getValue();

    var iii = 2; // Вспомогательный счетчик

    // Основной цикл обработки данных
    while (aa) {
        // Получаем данные о штате
        sheet.getRange(strokeNum, 10).setValue(
            '=IMPORTXML("' + state + a + '"; "//html/body/div[1]/div/div[2]/div[1]/div/span")'
        );

        // Получаем данные о GP (Gram Panchayats)
        sheet.getRange(1, 11).setValue(
            '=IMPORTXML("' + state + a + '"; "//html/body/div/div/div/div/table/tbody/tr/td/a")'
        );

        // Получаем данные о деревнях
        sheet.getRange(strokeNum, 12).setValue(
            '=IMPORTXML("' + state + aa + '"; "//html/body/div/div/div/div/table/tbody")'
        );
        var aaa = sheet.getRange(strokeNum, 12).getValue();

        // Обрабатываем все деревни
        while (aaa) {
            strokeNum++;
            aaa = sheet.getRange(strokeNum, 12).getValue();
        }

        // Переходим к следующему подрегиону
        aa = sheet.getRange(iii, 2).getValue();
        iii++;
    }
}