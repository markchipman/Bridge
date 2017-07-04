Bridge.merge(new System.Globalization.CultureInfo("sw-CD", true), {
    englishName: "Kiswahili (Congo DRC)",
    nativeName: "Kiswahili (Jamhuri ya Kidemokrasia ya Kongo)",

    numberFormat: Bridge.merge(new System.Globalization.NumberFormatInfo(), {
        nanSymbol: "NaN",
        negativeSign: "-",
        positiveSign: "+",
        negativeInfinitySymbol: "-∞",
        positiveInfinitySymbol: "∞",
        percentSymbol: "%",
        percentGroupSizes: [3],
        percentDecimalDigits: 2,
        percentDecimalSeparator: ",",
        percentGroupSeparator: ".",
        percentPositivePattern: 1,
        percentNegativePattern: 1,
        currencySymbol: "FC",
        currencyGroupSizes: [3],
        currencyDecimalDigits: 2,
        currencyDecimalSeparator: ",",
        currencyGroupSeparator: ".",
        currencyNegativePattern: 1,
        currencyPositivePattern: 0,
        numberGroupSizes: [3],
        numberDecimalDigits: 2,
        numberDecimalSeparator: ",",
        numberGroupSeparator: ".",
        numberNegativePattern: 1
    }),

    dateTimeFormat: Bridge.merge(new System.Globalization.DateTimeFormatInfo(), {
        abbreviatedDayNames: ["yen","kwa","pil","tat","ine","tan","sit"],
        abbreviatedMonthGenitiveNames: ["mkw","mpi","mtu","min","mtn","mst","msb","mun","mts","mku","mkm","mkb",""],
        abbreviatedMonthNames: ["mkw","mpi","mtu","min","mtn","mst","msb","mun","mts","mku","mkm","mkb",""],
        amDesignator: "AM",
        dateSeparator: "/",
        dayNames: ["siku ya yenga","siku ya kwanza","siku ya pili","siku ya tatu","siku ya ine","siku ya tanu","siku ya sita"],
        firstDayOfWeek: 1,
        fullDateTimePattern: "dddd d MMMM yyyy HH:mm:ss",
        longDatePattern: "dddd d MMMM yyyy",
        longTimePattern: "HH:mm:ss",
        monthDayPattern: "d MMMM",
        monthGenitiveNames: ["mwezi ya kwanja","mwezi ya pili","mwezi ya tatu","mwezi ya ine","mwezi ya tanu","mwezi ya sita","mwezi ya saba","mwezi ya munane","mwezi ya tisa","mwezi ya kumi","mwezi ya kumi na moya","mwezi ya kumi ya mbili",""],
        monthNames: ["mwezi ya kwanja","mwezi ya pili","mwezi ya tatu","mwezi ya ine","mwezi ya tanu","mwezi ya sita","mwezi ya saba","mwezi ya munane","mwezi ya tisa","mwezi ya kumi","mwezi ya kumi na moya","mwezi ya kumi ya mbili",""],
        pmDesignator: "PM",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "d/M/yyyy",
        shortestDayNames: ["Jumapili","Jumatatu","Jumanne","Jumatano","Alhamisi","Ijumaa","Jumamosi"],
        shortTimePattern: "HH:mm",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "MMMM yyyy",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.uzzz"
    })
});