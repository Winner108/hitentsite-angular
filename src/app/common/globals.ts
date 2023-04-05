export class Globals {
    public static TYPE_SLOT = 1;
    public static TYPE_LIVE_CASINO = 2;
    public static TYPE_VIRTUAL = 3;
    public static TYPE_PLATFORM = 4;
    public static TYPE_SPORTSBOOK = 5;
    public static TYPE_BETONGAMES = 6;
    public static TYPE_BINGO = 7;
    public static TYPE_GAMES = 8;

    public static countries = [
        {name: 'Turkey (Türkiye)',dial_code: 90,code: 'tr'}
        ,{name: "Afghanistan ", dial_code: 93, code: "af"}
        ,{name: "Åland Islands", dial_code: 358, code: "ax"}
        ,{name: "Albania (Shqipëri)", dial_code: 355, code: "al"}
        ,{name: "Algeria ", dial_code: 213, code: "dz"}
        ,{name: "American Samoa", dial_code: 1, code: "as"}
        ,{name: "Andorra", dial_code: 376, code: "ad"}
        ,{name: "Angola", dial_code: 244, code: "ao"}
        ,{name: "Anguilla", dial_code: 1, code: "ai"}
        ,{name: "Antigua and Barbuda", dial_code: 1, code: "ag"}
        ,{name: "Armenia (Հայաստան)", dial_code: 374, code: "am"}
        ,{name: "Aruba", dial_code: 297, code: "aw"}
        ,{name: "Australia", dial_code: 61, code: "au"}
        ,{name: "Azerbaijan (Azərbaycan)", dial_code: 994, code: "az"}
        ,{name: "Bahamas", dial_code: 1, code: "bs"}
        ,{name: "Bahrain ", dial_code: 973, code: "bh"}
        ,{name: "Bangladesh (বাংলাদেশ)", dial_code: 880, code: "bd"}
        ,{name: "Barbados", dial_code: 1, code: "bb"}
        ,{name: "Belarus (Беларусь)", dial_code: 375, code: "by"}
        ,{name: "Belize", dial_code: 501, code: "bz"}
        ,{name: "Benin (Bénin)", dial_code: 229, code: "bj"}
        ,{name: "Bermuda", dial_code: 1, code: "bm"}
        ,{name: "Bhutan (འབྲུག)", dial_code: 975, code: "bt"}
        ,{name: "Bolivia", dial_code: 591, code: "bo"}
        ,{name: "Bosnia and Herzegovina (Босна и Херцеговина)", dial_code: 387, code: "ba"}
        ,{name: "Botswana", dial_code: 267, code: "bw"}
        ,{name: "Brazil (Brasil)", dial_code: 55, code: "br"}
        ,{name: "British Indian Ocean Territory", dial_code: 246, code: "io"}
        ,{name: "Brunei", dial_code: 673, code: "bn"}
        ,{name: "Bulgaria (България)", dial_code: 359, code: "bg"}
        ,{name: "Burkina Faso", dial_code: 226, code: "bf"}
        ,{name: "Burundi (Uburundi)", dial_code: 257, code: "bi"}
        ,{name: "Cambodia (កម្ពុជា)", dial_code: 855, code: "kh"}
        ,{name: "Cameroon (Cameroun)", dial_code: 237, code: "cm"}
        ,{name: "Cape Verde (Kabu Verdi)", dial_code: 238, code: "cv"}
        ,{name: "Cayman Islands", dial_code: 1, code: "ky"}
        ,{name: "Central African Republic (République centrafricaine)", dial_code: 236, code: "cf"}
        ,{name: "Chad (Tchad)", dial_code: 235, code: "td"}
        ,{name: "Chile", dial_code: 56, code: "cl"}
        ,{name: "China (中国)", dial_code: 86, code: "cn"}
        ,{name: "Christmas Island", dial_code: 61, code: "cx"}
        ,{name: "Cocos (Keeling) Islands", dial_code: 61, code: "cc"}
        ,{name: "Colombia", dial_code: 57, code: "co"}
        ,{name: "Comoros (&#x202B;جزر القمر&#x202C;&lrm;)", dial_code: 269, code: "km"}
        ,{name: "Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", dial_code: 243, code: "cd"}
        ,{name: "Congo (Republic) (Congo-Brazzaville)", dial_code: 242, code: "cg"}
        ,{name: "Cook Islands", dial_code: 682, code: "ck"}
        ,{name: "Costa Rica", dial_code: 506, code: "cr"}
        ,{name: "Côte d’Ivoire", dial_code: 225, code: "ci"}
        ,{name: "Cuba", dial_code: 53, code: "cu"}
        ,{name: "Curaçao", dial_code: 599, code: "cw"}
        ,{name: "Czech Republic (Česká republika)", dial_code: 420, code: "cz"}
        ,{name: "Denmark (Danmark)", dial_code: 45, code: "dk"}
        ,{name: "Djibouti", dial_code: 253, code: "dj"}
        ,{name: "Dominican Republic (República Dominicana)", dial_code: 1, code: "do"}
        ,{name: "Ecuador", dial_code: 593, code: "ec"}
        ,{name: "Egypt (&#x202B;مصر&#x202C;&lrm;)", dial_code: 20, code: "eg"}
        ,{name: "El Salvador", dial_code: 503, code: "sv"}
        ,{name: "Equatorial Guinea (Guinea Ecuatorial)", dial_code: 240, code: "gq"}
        ,{name: "Eritrea", dial_code: 291, code: "er"}
        ,{name: "Estonia (Eesti)", dial_code: 372, code: "ee"}
        ,{name: "Eswatini", dial_code: 268, code: "sz"}
        ,{name: "Ethiopia", dial_code: 251, code: "et"}
        ,{name: "Falkland Islands (Islas Malvinas)", dial_code: 500, code: "fk"}
        ,{name: "Faroe Islands (Føroyar)", dial_code: 298, code: "fo"}
        ,{name: "Fiji", dial_code: 679, code: "fj"}
        ,{name: "Finland (Suomi)", dial_code: 358, code: "fi"}
        ,{name: "France", dial_code: 33, code: "fr"}
        ,{name: "French Guiana (Guyane française)", dial_code: 594, code: "gf"}
        ,{name: "French Polynesia (Polynésie française)", dial_code: 689, code: "pf"}
        ,{name: "Gabon", dial_code: 241, code: "ga"}
        ,{name: "Gambia", dial_code: 220, code: "gm"}
        ,{name: "Georgia (საქართველო)", dial_code: 995, code: "ge"}
        ,{name: "Germany (Deutschland)", dial_code: 49, code: "de"}
        ,{name: "Ghana (Gaana)", dial_code: 233, code: "gh"}
        ,{name: "Gibraltar", dial_code: 350, code: "gi"}
        ,{name: "Greece (Ελλάδα)", dial_code: 30, code: "gr"}
        ,{name: "Greenland (Kalaallit Nunaat)", dial_code: 299, code: "gl"}
        ,{name: "Grenada", dial_code: 1, code: "gd"}
        ,{name: "Guadeloupe", dial_code: 590, code: "gp"}
        ,{name: "Guam", dial_code: 1, code: "gu"}
        ,{name: "Guatemala", dial_code: 502, code: "gt"}
        ,{name: "Guernsey", dial_code: 44, code: "gg"}
        ,{name: "Guinea (Guinée)", dial_code: 224, code: "gn"}
        ,{name: "Guinea-Bissau (Guiné Bissau)", dial_code: 245, code: "gw"}
        ,{name: "Guyana", dial_code: 592, code: "gy"}
        ,{name: "Haiti", dial_code: 509, code: "ht"}
        ,{name: "Honduras", dial_code: 504, code: "hn"}
        ,{name: "Hong Kong (香港)", dial_code: 852, code: "hk"}
        ,{name: "Hungary (Magyarország)", dial_code: 36, code: "hu"}
        ,{name: "Iceland (Ísland)", dial_code: 354, code: "is"}
        ,{name: "India (भारत)", dial_code: 91, code: "in"}
        ,{name: "Indonesia", dial_code: 62, code: "id"}
        ,{name: "Iran (&#x202B;ایران&#x202C;&lrm;)", dial_code: 98, code: "ir"}
        ,{name: "Iraq (&#x202B;العراق&#x202C;&lrm;)", dial_code: 964, code: "iq"}
        ,{name: "Ireland", dial_code: 353, code: "ie"}
        ,{name: "Isle of Man", dial_code: 44, code: "im"}
        ,{name: "Israel (&#x202B;ישראל&#x202C;&lrm;)", dial_code: 972, code: "il"}
        ,{name: "Italy (Italia)", dial_code: 39, code: "it"}
        ,{name: "Jamaica", dial_code: 1, code: "jm"}
        ,{name: "Japan (日本)", dial_code: 81, code: "jp"}
        ,{name: "Jersey", dial_code: 44, code: "je"}
        ,{name: "Jordan (&#x202B;الأردن&#x202C;&lrm;)", dial_code: 962, code: "jo"}
        ,{name: "Kazakhstan (Казахстан)", dial_code: 7, code: "kz"}
        ,{name: "Kenya", dial_code: 254, code: "ke"}
        ,{name: "Kiribati", dial_code: 686, code: "ki"}
        ,{name: "Kosovo", dial_code: 383, code: "xk"}
        ,{name: "Kuwait (&#x202B;الكويت&#x202C;&lrm;)", dial_code: 965, code: "kw"}
        ,{name: "Kyrgyzstan (Кыргызстан)", dial_code: 996, code: "kg"}
        ,{name: "Laos (ລາວ)", dial_code: 856, code: "la"}
        ,{name: "Latvia (Latvija)", dial_code: 371, code: "lv"}
        ,{name: "Lebanon (&#x202B;لبنان&#x202C;&lrm;)", dial_code: 961, code: "lb"}
        ,{name: "Lesotho", dial_code: 266, code: "ls"}
        ,{name: "Liberia", dial_code: 231, code: "lr"}
        ,{name: "Libya (&#x202B;ليبيا&#x202C;&lrm;)", dial_code: 218, code: "ly"}
        ,{name: "Liechtenstein", dial_code: 423, code: "li"}
        ,{name: "Lithuania (Lietuva)", dial_code: 370, code: "lt"}
        ,{name: "Luxembourg", dial_code: 352, code: "lu"}
        ,{name: "Macau (澳門)", dial_code: 853, code: "mo"}
        ,{name: "Macedonia (FYROM) (Македонија)", dial_code: 389, code: "mk"}
        ,{name: "Madagascar (Madagasikara)", dial_code: 261, code: "mg"}
        ,{name: "Malawi", dial_code: 265, code: "mw"}
        ,{name: "Malaysia", dial_code: 60, code: "my"}
        ,{name: "Maldives", dial_code: 960, code: "mv"}
        ,{name: "Mali", dial_code: 223, code: "ml"}
        ,{name: "Malta", dial_code: 356, code: "mt"}
        ,{name: "Marshall Islands", dial_code: 692, code: "mh"}
        ,{name: "Martinique", dial_code: 596, code: "mq"}
        ,{name: "Mauritania (&#x202B;موريتانيا&#x202C;&lrm;)", dial_code: 222, code: "mr"}
        ,{name: "Mauritius (Moris)", dial_code: 230, code: "mu"}
        ,{name: "Mayotte", dial_code: 262, code: "yt"}
        ,{name: "Mexico (México)", dial_code: 52, code: "mx"}
        ,{name: "Micronesia", dial_code: 691, code: "fm"}
        ,{name: "Moldova (Republica Moldova)", dial_code: 373, code: "md"}
        ,{name: "Monaco", dial_code: 377, code: "mc"}
        ,{name: "Mongolia (Монгол)", dial_code: 976, code: "mn"}
        ,{name: "Montserrat", dial_code: 1, code: "ms"}
        ,{name: "Morocco (&#x202B;المغرب&#x202C;&lrm;)", dial_code: 212, code: "ma"}
        ,{name: "Mozambique (Moçambique)", dial_code: 258, code: "mz"}
        ,{name: "Myanmar (Burma) (မြန်မာ)", dial_code: 95, code: "mm"}
        ,{name: "Namibia (Namibië)", dial_code: 264, code: "na"}
        ,{name: "Nauru", dial_code: 674, code: "nr"}
        ,{name: "Nepal (नेपाल)", dial_code: 977, code: "np"}
        ,{name: "Netherlands (Nederland)", dial_code: 31, code: "nl"}
        ,{name: "New Caledonia (Nouvelle-Calédonie)", dial_code: 687, code: "nc"}
        ,{name: "New Zealand", dial_code: 64, code: "nz"}
        ,{name: "Nicaragua", dial_code: 505, code: "ni"}
        ,{name: "Niger (Nijar)", dial_code: 227, code: "ne"}
        ,{name: "Nigeria", dial_code: 234, code: "ng"}
        ,{name: "Niue", dial_code: 683, code: "nu"}
        ,{name: "Norfolk Island", dial_code: 672, code: "nf"}
        ,{name: "North Korea (조선 민주주의 인민 공화국)", dial_code: 850, code: "kp"}
        ,{name: "Northern Mariana Islands", dial_code: 1, code: "mp"}
        ,{name: "Oman (&#x202B;عُمان&#x202C;&lrm;)", dial_code: 968, code: "om"}
        ,{name: "Pakistan (&#x202B;پاکستان&#x202C;&lrm;)", dial_code: 92, code: "pk"}
        ,{name: "Palau", dial_code: 680, code: "pw"}
        ,{name: "Palestine (&#x202B;فلسطين&#x202C;&lrm;)", dial_code: 970, code: "ps"}
        ,{name: "Panama (Panamá)", dial_code: 507, code: "pa"}
        ,{name: "Papua New Guinea", dial_code: 675, code: "pg"}
        ,{name: "Paraguay", dial_code: 595, code: "py"}
        ,{name: "Peru (Perú)", dial_code: 51, code: "pe"}
        ,{name: "Philippines", dial_code: 63, code: "ph"}
        ,{name: "Poland (Polska)", dial_code: 48, code: "pl"}
        ,{name: "Portugal", dial_code: 351, code: "pt"}
        ,{name: "Puerto Rico", dial_code: 1, code: "pr"}
        ,{name: "Qatar (&#x202B;قطر&#x202C;&lrm;)", dial_code: 974, code: "qa"}
        ,{name: "Réunion (La Réunion)", dial_code: 262, code: "re"}
        ,{name: "Romania (România)", dial_code: 40, code: "ro"}
        ,{name: "Russia (Россия)", dial_code: 7, code: "ru"}
        ,{name: "Rwanda", dial_code: 250, code: "rw"}
        ,{name: "Saint Barthélemy", dial_code: 590, code: "bl"}
        ,{name: "Saint Helena", dial_code: 290, code: "sh"}
        ,{name: "Saint Kitts and Nevis", dial_code: 1, code: "kn"}
        ,{name: "Saint Lucia", dial_code: 1, code: "lc"}
        ,{name: "Saint Martin (Saint-Martin (partie française))", dial_code: 590, code: "mf"}
        ,{name: "Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", dial_code: 508, code: "pm"}
        ,{name: "Saint Vincent and the Grenadines", dial_code: 1, code: "vc"}
        ,{name: "Samoa", dial_code: 685, code: "ws"}
        ,{name: "San Marino", dial_code: 378, code: "sm"}
        ,{name: "São Tomé and Príncipe (São Tomé e Príncipe)", dial_code: 239, code: "st"}
        ,{name: "Saudi Arabia (&#x202B;المملكة العربية السعودية&#x202C;&lrm;)", dial_code: 966, code: "sa"}
        ,{name: "Senegal (Sénégal)", dial_code: 221, code: "sn"}
        ,{name: "Serbia (Србија)", dial_code: 381, code: "rs"}
        ,{name: "Seychelles", dial_code: 248, code: "sc"}
        ,{name: "Sierra Leone", dial_code: 232, code: "sl"}
        ,{name: "Singapore", dial_code: 65, code: "sg"}
        ,{name: "Sint Maarten", dial_code: 1, code: "sx"}
        ,{name: "Slovakia (Slovensko)", dial_code: 421, code: "sk"}
        ,{name: "Slovenia (Slovenija)", dial_code: 386, code: "si"}
        ,{name: "Solomon Islands", dial_code: 677, code: "sb"}
        ,{name: "Somalia (Soomaaliya)", dial_code: 252, code: "so"}
        ,{name: "South Africa", dial_code: 27, code: "za"}
        ,{name: "South Korea (대한민국)", dial_code: 82, code: "kr"}
        ,{name: "South Sudan (&#x202B;جنوب السودان&#x202C;&lrm;)", dial_code: 211, code: "ss"}
        ,{name: "Spain (España)", dial_code: 34, code: "es"}
        ,{name: "Sri Lanka (ශ්&zwj;රී ලංකාව)", dial_code: 94, code: "lk"}
        ,{name: "Sudan (&#x202B;السودان&#x202C;&lrm;)", dial_code: 249, code: "sd"}
        ,{name: "Suriname", dial_code: 597, code: "sr"}
        ,{name: "Svalbard and Jan Mayen", dial_code: 47, code: "sj"}
        ,{name: "Sweden (Sverige)", dial_code: 46, code: "se"}
        ,{name: "Switzerland (Schweiz)", dial_code: 41, code: "ch"}
        ,{name: "Syria (&#x202B;سوريا&#x202C;&lrm;)", dial_code: 963, code: "sy"}
        ,{name: "Taiwan (台灣)", dial_code: 886, code: "tw"}
        ,{name: "Tajikistan", dial_code: 992, code: "tj"}
        ,{name: "Tanzania", dial_code: 255, code: "tz"}
        ,{name: "Thailand (ไทย)", dial_code: 66, code: "th"}
        ,{name: "Timor-Leste", dial_code: 670, code: "tl"}
        ,{name: "Togo", dial_code: 228, code: "tg"}
        ,{name: "Tokelau", dial_code: 690, code: "tk"}
        ,{name: "Tonga", dial_code: 676, code: "to"}
        ,{name: "Trinidad and Tobago", dial_code: 1, code: "tt"}
        ,{name: "Tunisia (&#x202B;تونس&#x202C;&lrm;)", dial_code: 216, code: "tn"}
        ,{name: "Turkey (Türkiye)", dial_code: 90, code: "tr"}
        ,{name: "Turkmenistan", dial_code: 993, code: "tm"}
        ,{name: "Turks and Caicos Islands", dial_code: 1, code: "tc"}
        ,{name: "Tuvalu", dial_code: 688, code: "tv"}
        ,{name: "Uganda", dial_code: 256, code: "ug"}
        ,{name: "Ukraine (Україна)", dial_code: 380, code: "ua"}
        ,{name: "United Arab Emirates (&#x202B;الإمارات العربية المتحدة&#x202C;&lrm;)", dial_code: 971, code: "ae"}
        ,{name: "United Kingdom", dial_code: 44, code: "gb"}
        ,{name: "United States", dial_code: 1, code: "us"}
        ,{name: "Uruguay", dial_code: 598, code: "uy"}
        ,{name: "Uzbekistan (Oʻzbekiston)", dial_code: 998, code: "uz"}
        ,{name: "Vanuatu", dial_code: 678, code: "vu"}
        ,{name: "Vatican City (Città del Vaticano)", dial_code: 39, code: "va"}
        ,{name: "Venezuela", dial_code: 58, code: "ve"}
        ,{name: "Vietnam (Việt Nam)", dial_code: 84, code: "vn"}
        ,{name: "Wallis and Futuna (Wallis-et-Futuna)", dial_code: 681, code: "wf"}
        ,{name: "Western Sahara (&#x202B;الصحراء الغربية&#x202C;&lrm;)", dial_code: 212, code: "eh"}
        ,{name: "Yemen (&#x202B;اليمن&#x202C;&lrm;)", dial_code: 967, code: "ye"}
        ,{name: "Zambia", dial_code: 260, code: "zm"}
        ,{name: "Zimbabwe", dial_code: 263, code: "zw"}
    ]
}
