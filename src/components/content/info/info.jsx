import React from "react";
import styles from './info.module.css';
import TextWithLine from "../../templates/text-with-line/text-with-line";

const Info = ()=>{
    return (
        <div>
            <TextWithLine name={'Типы духов'}/>
            <div className={styles.block}>
                <div /><span>Концентрированные духи</span> (extrait de parfum) отличаются
                наибольшим содержанием собственно ароматических веществ (свыше 20%, иногда до 50%).
                Эта форма часто встречается среди парфюмерии арабского происхождения, где основой
                как раз служат масла. Как правило, такие духи выпускаются в небольших, до 15 мл
                объемом, флаконах, часто богато декорированных. Желающие купить духи концентрированные
                должны понимать их особенности. Наносить такие духи нужно очень аккуратно и дозировано –
                они могут оставить пятна на одежде, а под воздействием солнечного цвета – и на теле.
                Высокая концентрация ароматических веществ делает их очень стойкими, аромат может
                оставаться практически неизменным до 8 часов, а его отголоски можно уловить и через
                несколько дней. Соответственно, такие духи очень экономичны – при правильном хранении
                их хватит очень надолго, что несколько оправдывает цены на продукты этого ряда – самые
                высокие среди парфюмерных товаров.
            </div>
            <div className={styles.block}>
                <div /><span>Духи</span> (parfum) – это следующий по стойкости продукт, содержание ароматической
                композиции в котором обычно составляет 10-20%. Флаконы духов часто оформляются более
                изысканно и интересно, чем у туалетной и парфюмированной воды того же вида, они часто
                бывают коллекционными и всегда небольшие по объему – до 30 мл, часто без пульверизатора
                для более экономичного нанесения. Из-за высокой концентрации парфюмерных веществ, духи
                обычно используются как вечерний вариант, так как их красивый, насыщенный шлейф может
                тяжело восприниматься в будничной обстановке.
            </div>
            <div className={styles.block}>
                <div /><span>Парфюмированная вода</span> (eau de parfum, edp) – сейчас это, пожалуй, самый популярный вид
                парфюмерной продукции. Достаточно высокая стойкость, удобство транспортировки и нанесения,
                разумное соотношение цены и качества – все это сделало именно парфюмированную воду самой
                покупаемой разновидностью. Так что если вы собираетесь купить духи в подарок, и не знаете,
                какой вариант предпочесть – выбирайте именно парфюмированную воду. Иногда парфюмированную
                воду еще можно встретить под названием «туалетные духи» - это просто другое название этого
                же продукта. В ассортименте большинства коммерческих брендов парфюмированная вода – это самый
                концентрированный вариант, поскольку выпускать духи в каждой из многочисленных линеек нецелесообразно.
            </div>
            <div className={styles.block}>
                <div /><span>Туалетная вода</span> (eau de toilette, edt) – также очень популярный вариант, а многие линейки
                ароматов состоят вообще только из туалетной воды, представленной в разном объеме. Очевидным
                минусом туалетной воды является ее меньшая стойкость и менее интенсивный, чем у духов и парфюмированной
                воды, аромат, менее выразительный шлейф или полное его отсутствие. Впрочем, для повседневного
                использования туалетная вода подходит ничуть не хуже парфюмированной – многим нравится легкий,
                не раздражающий аромат.
            </div>
            <TextWithLine name={'Мужская парфюмерия'}/>
            <div className={styles.title}>Мужская парфюмерия чаще всего относится к одному из следующих типов:</div>
            <div className={styles.block}>
                <div /><span>Древесные ароматы</span> объединяют ноты ценных древесных пород – сандала,
                пачули, кедра, ветивера. В зависимости от компаньонов, они могут сделать аромат теплее
                или свежее, заставить звучать его строго или чувственно. Мужская парфюмерия с древесными
                нотами отличается особенным богатством ароматической композиции, красиво раскрываясь в течение
                дня. Наиболее ярко представляют этот тип ароматы Yves Saint Laurent Jazz, Ralph Lauren Polo,
                Paco Rabanne XS, Issey Miyake L'Eau d'Issey for Men, Carolina Herrera Herrera for Men.
            </div>
            <div className={styles.block}>
                <div /><span>Цитрусовые ароматы</span>, как следует из названия этой группы, объединяют
                все мужские парфюмы с нотами цитрусовых растений – от привычных лимона, мандарина
                и бергамота до экзотического танжерина. Это ароматы свежести, легкости и молодости,
                благодаря чему они идеально подходят для летнего сезона и часто становятся идеальным
                вариантом на каждый день. Эта группа, пожалуй, наиболее широко представлена в мужской
                парфюмерии – к ней можно отнести такие разные и по стилю, и по цене ароматы как, например,
                Dior Eau Sauvage и Mexx Pure Life Man.
            </div>
            <div className={styles.block}>
                <div /><span>Восточные (ориентальные) ароматы</span> – это классика мужской парфюмерии,
                наиболее изысканные и сложные композиции как правило характеризуются ингредиентами
                этой группы – амброй, смолой, нотами табака, пряностей, специй. Мужские ароматы
                восточной группы придадут владельцу чувственности и загадочности; часто это
                парфюм для особых случаев. Типичные представители этой группы - Gaultier
                Le Male, Calvin Klein Obsession For Men, Yves Saint Laurent Opium pour
                Homme, Chanel Allure Homme.
            </div>
            <TextWithLine name={'Женская парфюмерия'}/>
            <div className={styles.title}>Как найти свой аромат в мире женской парфюмерии?</div>
            <div className={styles.block}>
                Большинство женских духов можно отнести к одному из четырех типов – цветочные,
                свежие, восточные или древесные. Традиционно принято соотносить их с определенными
                женскими типажами, и такая классификация, хотя и носит условный характер, вполне
                может дать общее представление о том, в каком направлении двигаться при выборе
                женского парфюма – не важно, для себя или в подарок.
            </div>
            <div className={styles.block}>
                Так, для деловой женщины подойдут свежие ароматы с прохладными, строгими нюансами,
                которые создают атмосферу собранности и будут уместны в любой обстановке –
                от утреннего совещания до вечернего делового ужина.
            </div>
            <div className={styles.block}>
                Романтичные особы без сомнения найдут близкий себе аромат среди цветочно-фруктовых
                композиций – эта самая обширная в женской парфюмерии группа предлагает впечатляющее
                количество самых разных ароматов для любой ситуации. Яркие, сочные ноты цветов и
                фруктов придают аромату жизнерадостное звучание, но в то же время остаются достаточно ненавязчивыми.
            </div>
            <div className={styles.block}>
                Восточные ароматы с их пряными, глубокими нотами – естественный выбор для любительницы вечеринок
                и светской жизни, настоящей роковой женщины. Это, пожалуй, наиболее выразительная группа женской
                парфюмерии, основное отличие которой – сложный, красиво раскрывающийся шлейф. Такие духи
                требовательны к обстановке, в которой их носят – они не подойдут для жаркого летнего дня,
                однако отлично будут звучать вечером в ресторане.
            </div>
            <div className={styles.block}>
                И, наконец, женщинам творческих профессий, артистичным и оригинальным натурам можно смело
                посоветовать обратить внимание на ароматы древесной группы. Они отличаются необычным,
                подчас даже резковатым звучанием и могут включать в себя разнообразные нетипичные для женской
                парфюмерии ноты – древесины, кожи, табака.
            </div>
        </div>
    )
};

export default Info;