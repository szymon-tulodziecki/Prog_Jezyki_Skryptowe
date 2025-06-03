import random
import json

category_descriptions = {
    "maka-ciemna-razowa": (
        "Mąka ciemna razowa to doskonały wybór dla osób poszukujących zdrowych i naturalnych składników. "
        "Wyprodukowana z pełnego ziarna, posiada wysoką zawartość błonnika oraz minerałów, co pozytywnie wpływa na trawienie i ogólne samopoczucie. "
        "Idealna do wypieku chleba, bułek oraz tradycyjnych polskich potraw. Jej intensywny smak i aromat docenią nawet najbardziej wymagający smakosze. "
        "Stosowana regularnie, wspomaga prawidłową pracę układu pokarmowego i pomaga utrzymać zdrową sylwetkę."
    ),
    "maka-jasna-razowa": (
        "Mąka jasna razowa to kompromis pomiędzy lekkością a wartościami odżywczymi. Cechuje ją delikatniejszy smak i jasny kolor, "
        "dzięki czemu sprawdzi się zarówno w pieczywie, jak i ciastach. Zawiera cenne witaminy z grupy B oraz minerały. "
        "Polecana dla osób ceniących zdrowe, ale i delikatne wypieki. Jej subtelna struktura doskonale komponuje się z innymi składnikami."
    ),
    "maka-gryczana": (
        "Kasza i mąka gryczana to naturalne produkty bezglutenowe, bogate w białko i aminokwasy. Szczególnie polecane osobom na diecie bezglutenowej "
        "oraz sportowcom. Gryka to źródło rutyny, która wspiera układ krążenia i wzmacnia naczynia krwionośne. "
        "Doskonała do naleśników, placków oraz jako dodatek do zup. Naturalny smak i wartości odżywcze zachwycą każdego."
    ),
    "makarony": (
        "Makaron domowy to tradycyjny smak dzieciństwa, przygotowywany z najlepszej jakości mąki i jaj. "
        "Wyróżnia się elastyczną strukturą i wyjątkowym smakiem, który idealnie współgra z różnorodnymi sosami. "
        "Idealny do rosołu, zapiekanek czy sałatek. Gwarancja udanego obiadu dla całej rodziny!"
    ),
    "kurtes": (
        "Oliwa extra virgin Kurtes to produkt premium, tłoczony na zimno z wyselekcjonowanych oliwek. "
        "Bogata w nienasycone kwasy tłuszczowe, witaminy E i K oraz przeciwutleniacze. "
        "Doskonała do sałatek, pieczywa oraz jako dodatek do dań gotowanych i pieczonych. "
        "Jej wyrazisty smak i aromat podkreśli charakter każdej potrawy."
    ),
    "otreby": (
        "Otręby to bogactwo błonnika, witamin oraz minerałów. Regularne spożywanie wspiera trawienie i daje uczucie sytości na długo. "
        "Doskonale nadają się do jogurtów, musli czy wypieku domowego chleba. Szczególnie polecane osobom dbającym o linię."
    ),
    "ciastka-pierniki": (
        "Ciastka i pierniki to słodka przyjemność dla każdego. Wypiekane z naturalnych składników, bez sztucznych dodatków. "
        "Idealne do kawy, herbaty lub jako słodka przekąska w ciągu dnia. Smak dzieciństwa zamknięty w każdym kęsie!"
    ),
    "ziarna": (
        "Ziarna to prawdziwa skarbnica witamin, minerałów i zdrowych tłuszczów. Dodawaj je do sałatek, wypieków lub jedz jako przekąskę. "
        "Wspierają odporność i dostarczają energię na cały dzień. Dla aktywnych i tych, którzy cenią naturalne źródła zdrowia."
    ),
    "trufle": (
        "Trufle to ekskluzywne słodycze o intensywnym smaku. Ręcznie robione, z najlepszych składników. "
        "Idealne na prezent lub jako wyjątkowa przyjemność na co dzień. Każda trufla to niepowtarzalne doznanie smakowe!"
    )
}

categories = [
    {"key": "maka-ciemna-razowa", "img": "Ciemna_razowa", "name": "Mąka ciemna razowa", "start_id": 1},
    {"key": "maka-jasna-razowa", "img": "Jasna_razowa", "name": "Mąka jasna razowa", "start_id": 21},
    {"key": "maka-gryczana", "img": "Kasza_gryczana", "name": "Kasza gryczana", "start_id": 41},
    {"key": "makarony", "img": "Makaron", "name": "Makaron domowy", "start_id": 61},
    {"key": "kurtes", "img": "Oliwa", "name": "Oliwa extra virgin", "start_id": 81},
    {"key": "otreby", "img": "Otreby", "name": "Otręby", "start_id": 101},
    {"key": "ciastka-pierniki", "img": "Ciastka", "name": "Ciastka", "start_id": 121},
    {"key": "ziarna", "img": "Ziarna", "name": "Ziarna", "start_id": 141},
    {"key": "trufle", "img": "Trufle", "name": "Trufle", "start_id": 161}
]

def random_flags():
    flags = [0, 0, 0]
    picked = random.randint(0, 2)
    flags[picked] = 1
    return flags

def random_stock():
    return random.randint(0, 100)

def random_price(base):
    change = random.uniform(0.8, 1.2)
    return round(base * change, 2)

products = []

for cat in categories:
    opis = category_descriptions[cat["key"]]
    for i in range(20):
        pid = cat["start_id"] + i
        name = f"{cat['name']} {i+1}"
        cena = random_price(9 + i*0.5)
        stan = random_stock()
        flags = random_flags()
        nowosc, bestseller, promocja = flags

        product_categories = [cat["key"]]
        if nowosc: product_categories.append("nowosci")
        if bestseller: product_categories.append("bestsellery")
        if promocja: product_categories.append("promocje")

        products.append({
            "id": pid,
            "name": name,
            "price": cena,
            "image": cat["img"],
            "description": opis,
            "stock": stan,
            "isNew": bool(nowosc),
            "isBestseller": bool(bestseller),
            "isPromo": bool(promocja),
            "categories": product_categories
        })

with open("products.json", "w", encoding="utf-8") as f:
    json.dump(products, f, ensure_ascii=False, indent=2)

print("Produkty zapisane do products.json!")
