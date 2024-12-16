import sushi from '../assets/images/sushi.png'
import sushiroll from '../assets/images/sushiroll.jpg'
import sashimi from '../assets/images/sashimi.jpg'
import tempura from '../assets/images/tempura.jpg'
import miso from '../assets/images/miso.jpg'
import dragonroll from '../assets/images/dragonroll.jpg'
import pizza from '../assets/images/pizza.png'
import lasanha from '../assets/images/lasanha.jpg'
import risoto from '../assets/images/risotto.jpg'
import tiramisu from '../assets/images/tiramisu.jpg'
import bruschetta from '../assets/images/bruschetta.jpg'
import carbonara from '../assets/images/carbonara.jpg'
import classic from '../assets/images/classic.jpg'
import double from '../assets/images/double.jpg'
import chicken from '../assets/images/chicken.jpg'
import veggie from '../assets/images/veggie.jpg'
import ribeye from '../assets/images/ribeye.jpg'
import tbone from '../assets/images/tbone.jpg'
import ribs from '../assets/images/ribs.jpg'
import wings from '../assets/images/wings.jpg'
import curry from '../assets/images/curry.jpg'
import samosa from '../assets/images/samosa.jpg'
import naan from '../assets/images/naan.jpg'
import lentil from '../assets/images/lentil.jpg'
import croissant from '../assets/images/croissant.jpg'
import espresso from '../assets/images/espresso.jpg'
import quiche from '../assets/images/quiche.jpg'
import eclair from '../assets/images/eclair.jpg'

const produtos = [
  // Produtos do restaurante Hioki Sushi
  {
    id: 1,
    image: sushiroll,
    title: 'Sushi Roll',
    shortDescription: `Rolinhos delicados de arroz temperado recheados com salmão, atum e pepino, envoltos em alga nori. Uma explosão de sabor e frescor! Ideal para um almoço leve e especial.`,
    description: `O Sushi Roll é um clássico da culinária japonesa, feito com arroz temperado cuidadosamente prensado e recheios variados, como salmão fresco, atum e pepino crocante. Cada pedaço é envolvido por uma fina camada de alga nori, que agrega textura e um leve sabor marinho. O equilíbrio entre os ingredientes garante uma experiência gastronômica leve, saborosa e irresistível. Ideal para ocasiões especiais ou para quem deseja saborear a culinária japonesa em sua essência mais pura. Serve: 1 pessoa`,
    price: 45.9
  },
  {
    id: 2,
    image: sashimi,
    title: 'Sashimi Deluxe',
    shortDescription: `Fatias de salmão, atum e tilápia frescos, cortadas delicadamente para valorizar o sabor e a sofisticação de cada pedaço. Uma experiência única para os amantes de frutos do mar.`,
    description: `O Sashimi Deluxe é uma experiência única para os amantes de frutos do mar frescos. Este prato é composto por finas fatias de peixes selecionados, como salmão, atum e tilápia, cortadas com precisão para destacar sua textura e sabor naturais. Servido sem acompanhamentos, o Sashimi Deluxe permite que você aprecie a pureza e o frescor dos ingredientes em sua forma mais autêntica. É uma escolha perfeita para quem busca sofisticação e o verdadeiro espírito da culinária japonesa. Serve: 1 pessoa`,
    price: 89.9
  },
  {
    id: 3,
    image: tempura,
    title: 'Tempura',
    shortDescription: `Legumes frescos e frutos do mar empanados em massa leve, fritos até dourar. Uma escolha irresistível para compartilhar momentos! Crocância e sabor em harmonia.`,
    description: `O Tempura é uma especialidade da culinária japonesa que combina leveza e crocância de forma harmoniosa. Preparado com uma seleção de legumes frescos e frutos do mar, cada pedaço é mergulhado em uma massa delicada e frita até alcançar um dourado perfeito. O resultado é uma textura crocante por fora e maciez por dentro. Servido com um molho especial à base de soja, é uma opção deliciosa e ideal para compartilhar em qualquer ocasião. Serve: 2 pessoas`,
    price: 35.0
  },
  {
    id: 4,
    image: miso,
    title: 'Miso Soup',
    shortDescription: `Sopa tradicional japonesa feita com missô, tofu macio, algas e cebolinha. Uma combinação reconfortante e nutritiva! Perfeita para iniciar uma refeição especial.`,
    description: `A Miso Soup é uma sopa tradicional japonesa, conhecida por sua combinação reconfortante de sabores e texturas. Feita com uma base de pasta de missô, ela é enriquecida com pedaços de tofu macio, algas marinhas delicadas e cebolinha fresca. Esta sopa é leve e nutritiva, sendo uma ótima escolha para iniciar uma refeição japonesa ou simplesmente aquecer o corpo em dias frios. Simples e deliciosa, é uma das iguarias mais queridas da culinária oriental. Serve: 1 pessoa`,
    price: 20.0
  },
  {
    id: 5,
    image: dragonroll,
    title: 'Dragon Roll',
    shortDescription: `Sushi com camarão tempurá e abacate, finalizado com molho especial e ovas. Sofisticação e sabor em harmonia! Uma apresentação que impressiona qualquer um.`,
    description: `O Dragon Roll é uma criação sofisticada da culinária japonesa que une sabores e texturas em perfeita harmonia. Recheado com camarão tempurá crocante e pepino fresco, este sushi é coberto com fatias generosas de abacate cremoso e finalizado com um molho especial e ovas delicadas. É uma experiência visual e gastronômica que impressiona tanto pelo sabor quanto pela apresentação impecável. Serve: 1 pessoa`,
    price: 60.0
  },
  {
    id: 6,
    image: sushi,
    title: 'Spicy Tuna',
    shortDescription: `Atum fresco temperado com especiarias e maionese picante, envolto em arroz e alga nori. Perfeito para os paladares mais ousados! Uma explosão de sabor intenso.`,
    description: `O Spicy Tuna é um prato vibrante e cheio de personalidade, ideal para quem aprecia sabores intensos. Preparado com atum fresco de alta qualidade, ele é temperado com especiarias e um toque de maionese picante, garantindo um equilíbrio perfeito entre frescor e ardência. Envolto em arroz temperado e alga nori, cada pedaço oferece uma explosão de sabor que agrada aos paladares mais exigentes. Serve: 1 pessoa`,
    price: 55.0
  },

  // Produtos do restaurante La Dolce Vita Trattoria
  {
    id: 7,
    image: pizza,
    title: 'Pizza Margherita',
    shortDescription: `A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!`,
    description: `A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião. Serve: de 2 a 3 pessoas`,
    price: 40.0
  },
  {
    id: 8,
    image: lasanha,
    title: 'Lasanha de Berinjela',
    shortDescription: `Lasanha leve e deliciosa com camadas de berinjela grelhada, molho de tomate fresco e queijo parmesão. Uma explosão de sabor saudável!`,
    description: `A Lasanha de Berinjela é uma opção saudável e deliciosa para os amantes da culinária italiana. Preparada com camadas de berinjela grelhada, molho de tomate fresco, queijo parmesão e manjericão, ela oferece uma textura leve e um sabor marcante. Essa alternativa às lasanhas tradicionais é perfeita para quem busca uma refeição nutritiva sem abrir mão da tradição e do requinte. Ideal para um almoço ou jantar especial em família ou com amigos. Serve: 2 pessoas`,
    price: 56.5
  },
  {
    id: 9,
    image: risoto,
    title: 'Risoto de Funghi',
    shortDescription: `Risoto cremoso preparado com cogumelos frescos, arroz arbóreo e parmesão. Uma experiência sofisticada e irresistível para os amantes da cozinha italiana!`,
    description: `O Risoto de Funghi é uma experiência gourmet que une a cremosidade do arroz arbóreo com o sabor intenso dos cogumelos porcini. Preparado com um caldo rico e finalizado com queijo parmesão e um toque de manteiga, este prato é a definição de sofisticação e conforto. O Risoto de Funghi é perfeito para ocasiões especiais, jantares românticos ou para quem aprecia a verdadeira alta gastronomia italiana. Serve: 2 pessoas`,
    price: 75.0
  },
  {
    id: 10,
    image: tiramisu,
    title: 'Tiramisu',
    shortDescription: `Sobremesa icônica feita com camadas de biscoito embebido em café, creme mascarpone e cacau. Doçura e elegância à mesa!`,
    description: `O Tiramisu é a sobremesa mais famosa da Itália, feita com camadas de biscoito champagne embebido em café fresco, um creme mascarpone suave e uma cobertura generosa de cacau em pó. Leve, doce e com um toque sutil de amargor, o Tiramisu é perfeito para encerrar qualquer refeição com elegância e sabor. Ideal para aqueles que desejam um toque de doçura sofisticada em seu dia. Serve: 1 pessoa`,
    price: 30.0
  },
  {
    id: 11,
    image: bruschetta,
    title: 'Bruschetta',
    shortDescription: `Fatias de pão crocante cobertas com tomate fresco, alho e azeite. Uma entrada simples, saborosa e irresistível!`,
    description: `A Bruschetta é um clássico da culinária italiana, perfeito como entrada ou lanche leve. Feita com fatias de pão levemente torrado, ela é coberta com uma mistura de tomate fresco, alho picado, azeite de oliva extra-virgem e manjericão. Este prato simples e delicioso é uma celebração dos sabores mediterrâneos e uma ótima forma de abrir o apetite. Ideal para ser compartilhado em qualquer ocasião. Serve: 1 pessoa`,
    price: 25.0
  },
  {
    id: 12,
    image: carbonara,
    title: 'Pasta Carbonara',
    shortDescription: `Espaguete ao molho cremoso com queijo parmesão, ovos e pancetta crocante. Um clássico irresistível da culinária italiana!`,
    description: `A Pasta Carbonara é um dos pratos mais icônicos da gastronomia italiana, reconhecida por sua cremosidade e simplicidade. Feita com espaguete de alta qualidade, ela é envolvida em um molho à base de ovos, queijo parmesão e pedaços crocantes de pancetta. Cada garfada proporciona uma explosão de sabores ricos e reconfortantes, tornando este prato uma escolha favorita em qualquer ocasião. Serve: 1 pessoa`,
    price: 65.0
  },

  // Produtos do restaurante Burger World
  {
    id: 13,
    image: classic,
    title: 'Classic Burger',
    shortDescription: `Hambúrguer artesanal com carne bovina, queijo, bacon crocante e molho especial. Perfeito para um almoço clássico!`,
    description: `O Classic Burger é um hambúrguer artesanal feito com carne bovina de alta qualidade, coberta com queijo derretido, fatias crocantes de bacon e um molho especial que realça cada mordida. Servido em um pão macio com alface e tomate fresco, ele é uma combinação perfeita para quem busca o sabor clássico e equilibrado. Acompanhado de batatas fritas crocantes, é uma escolha irresistível para qualquer refeição. Serve: 1 pessoa`,
    price: 50.0
  },
  {
    id: 14,
    image: double,
    title: 'Double Burger',
    shortDescription: `Dois hambúrgueres suculentos com queijo, bacon e molho especial. Um prato generoso e delicioso para os apaixonados por carne!`,
    description: `O Double Burger é a escolha ideal para quem ama sabores intensos e porções generosas. Com dois hambúrgueres suculentos, queijo derretido, fatias de bacon crocante e molho especial, ele é servido em um pão artesanal e acompanhado por batatas fritas douradas. Este prato satisfaz os paladares mais exigentes e é perfeito para um almoço ou jantar que deixa sua marca. Serve: 1 pessoa`,
    price: 65.0
  },
  {
    id: 15,
    image: chicken,
    title: 'Chicken Burger',
    shortDescription: `Peito de frango grelhado servido com molho de ervas finas, alface crocante e pão macio. Leve, nutritivo e delicioso!`,
    description: `O Chicken Burger é uma opção leve e saborosa para quem prefere carne branca. Feito com um peito de frango grelhado e suculento, ele é temperado com molho de ervas finas e servido em um pão macio com alface fresca. Este hambúrguer é perfeito para um almoço prático, mas cheio de sabor, que agrada a toda a família. Serve: 1 pessoa`,
    price: 45.0
  },
  {
    id: 16,
    image: veggie,
    title: 'Veggie Burger',
    shortDescription: `Hambúrguer vegetariano de grãos e temperos especiais, acompanhado de molho de iogurte e pão integral. Saudável e irresistível!`,
    description: `O Veggie Burger é a escolha ideal para quem busca uma refeição saudável sem abrir mão do sabor. Preparado com um hambúrguer de grãos e temperos especiais, ele é servido com molho de iogurte e pão integral, trazendo uma combinação leve, nutritiva e cheia de sabor. Este prato é uma alternativa deliciosa para vegetarianos ou amantes de pratos balanceados. Serve: 1 pessoa`,
    price: 48.0
  },

  // Produtos do restaurante The Steakhouse
  {
    id: 17,
    image: ribeye,
    title: 'Ribeye Steak',
    shortDescription: `Corte marmorizado e grelhado com sal grosso, acompanhado de batatas assadas e molho chimichurri. Sabor e suculência inigualáveis!`,
    description: `O Ribeye Steak é um dos cortes mais icônicos e apreciados, famoso por seu marmoreio que garante uma textura macia e suculenta. Grelhado com perfeição e temperado com sal grosso, ele é servido com acompanhamentos clássicos, como batatas assadas e um molho chimichurri que realça os sabores do prato. Ideal para quem aprecia uma refeição robusta e cheia de personalidade. Serve: 1 pessoa`,
    price: 90.0
  },
  {
    id: 18,
    image: tbone,
    title: 'T-Bone Steak',
    shortDescription: `Um corte suculento que combina contrafilé e filé mignon, grelhado com legumes na manteiga. Uma experiência única!`,
    description: `O T-Bone Steak é um corte clássico e impressionante que reúne o melhor de dois mundos: a maciez do filé mignon e a suculência do contrafilé, separados por um osso em formato de T. Este prato é grelhado no ponto de sua preferência e servido com legumes na manteiga e farofa crocante, criando uma refeição rica em texturas e sabores. Serve: 2 pessoas`,
    price: 120.0
  },
  {
    id: 19,
    image: ribs,
    title: 'BBQ Ribs',
    shortDescription: `Costelas de porco marinadas no molho barbecue, assadas lentamente até ficarem macias e saborosas. Acompanhamento perfeito!`,
    description: `As BBQ Ribs são costelas de porco cuidadosamente marinadas em um molho barbecue especial e assadas lentamente para atingir a perfeição. O resultado é uma carne macia que praticamente desmancha na boca, com um sabor defumado e levemente adocicado. Servidas com coleslaw e batatas fritas crocantes, elas são ideais para um jantar descontraído ou um encontro com amigos. Serve: 1 pessoa`,
    price: 85.0
  },
  {
    id: 20,
    image: wings,
    title: 'Chicken Wings',
    shortDescription: `Asinhas de frango marinadas com especiarias, assadas até ficarem crocantes e servidas com molho picante ou barbecue.`,
    description: `As Chicken Wings são asas de frango marinadas em uma mistura de especiarias que garantem um sabor marcante. Assadas até ficarem crocantes por fora e suculentas por dentro, elas são servidas com molhos à sua escolha, como barbecue ou picante. Perfeitas para compartilhar em encontros descontraídos ou acompanhar uma refeição principal. Serve: 1 a 2 pessoas`,
    price: 40.0
  },

  // Produtos do restaurante Masala Kitchen
  {
    id: 21,
    image: curry,
    title: 'Chicken Curry',
    shortDescription: `Frango cozido em um molho de curry cremoso com especiarias aromáticas. Servido com arroz basmati ou pão naan.`,
    description: `O Chicken Curry é um prato clássico da culinária indiana, conhecido por seu sabor intenso e marcante. Feito com pedaços suculentos de frango cozidos em um molho cremoso de curry, tomate e especiarias aromáticas, ele é servido com arroz basmati ou pão naan. Este prato traz uma explosão de sabores exóticos que é ao mesmo tempo reconfortante e sofisticada. Serve: 1 pessoa`,
    price: 55.0
  },
  {
    id: 22,
    image: samosa,
    title: 'Veggie Samosa',
    shortDescription: `Pastel indiano recheado com batatas, ervilhas e especiarias. Servido com chutney de tamarindo para um toque especial.`,
    description: `A Veggie Samosa é um lanche tradicional indiano, perfeito como entrada ou acompanhamento. Feita com uma massa fina e crocante, ela é recheada com uma mistura temperada de batatas, ervilhas e especiarias. Servida com chutney de tamarindo, ela oferece uma combinação de sabores levemente picantes e adocicados que agrada a todos. Serve: 1 pessoa`,
    price: 25.0
  },
  {
    id: 23,
    image: naan,
    title: 'Naan Bread',
    shortDescription: `Pão indiano macio, tostado no forno tandoor. Ideal para acompanhar curries ou como base para pratos exóticos.`,
    description: `O Naan Bread é um pão indiano macio, levemente tostado, que é essencial em qualquer refeição típica do país. Preparado no forno tandoor, ele apresenta uma textura única, com bordas levemente crocantes e um interior macio. Seja para acompanhar pratos como curries ou para ser apreciado com chutneys, o naan é um elemento indispensável na culinária indiana. Serve: 1 a 2 pessoas`,
    price: 15.0
  },
  {
    id: 24,
    image: lentil,
    title: 'Lentil Dal',
    shortDescription: `Lentilhas cozidas em um molho aromático de especiarias indianas, alho e gengibre. Um prato simples, mas cheio de sabor.`,
    description: `O Lentil Dal é uma refeição reconfortante e nutritiva, muito apreciada na culinária indiana. Feito com lentilhas cozidas lentamente em um molho aromático de especiarias, alho e gengibre, ele é perfeito para ser servido com arroz ou pão naan. Com seu sabor rico e equilibrado, este prato é uma escolha saudável e deliciosa para qualquer ocasião. Serve: 1 pessoa`,
    price: 35.0
  },

  // Produtos do restaurante Café Paris
  {
    id: 25,
    image: croissant,
    title: 'Croissant',
    shortDescription: `Massa folhada leve e amanteigada, assada até dourar. Perfeito para acompanhar um café ou chá a qualquer hora.`,
    description: `O Croissant é um clássico da confeitaria francesa, conhecido por sua massa folhada leve e delicada. Feito com manteiga de alta qualidade, ele é assado até atingir uma textura crocante por fora e macia por dentro. Ideal para acompanhar uma xícara de café ou chá, o croissant é perfeito para um café da manhã ou lanche sofisticado. Serve: 1 pessoa`,
    price: 12.0
  },
  {
    id: 26,
    image: espresso,
    title: 'Espresso',
    shortDescription: `Uma dose concentrada de café forte e encorpado, feita com grãos de alta qualidade e torra perfeita.`,
    description: `O Espresso é uma bebida clássica para os amantes de café, preparada com grãos selecionados de alta qualidade. Torrados e moídos na medida certa, eles garantem uma dose concentrada e encorpada, com um sabor marcante e um aroma irresistível. O espresso é a escolha ideal para começar o dia ou para uma pausa rápida cheia de energia. Serve: 1 pessoa`,
    price: 8.0
  },
  {
    id: 27,
    image: quiche,
    title: 'Quiche Lorraine',
    shortDescription: `Torta francesa com recheio de creme, queijo e bacon crocante. Um prato leve e par quem gosta de muito sabor!`,
    description: `A Quiche Lorraine é uma das tortas salgadas mais famosas da culinária francesa. Feita com uma massa leve e delicada, ela é recheada com um creme à base de ovos, queijo e pedaços crocantes de bacon. Pode ser servida quente ou fria, sendo uma excelente opção para um almoço leve, brunch ou jantar sofisticado. Serve: 1 a 2 pessoas`,
    price: 25.0
  },
  {
    id: 28,
    image: eclair,
    title: 'Éclair',
    shortDescription: `Massa choux recheada com creme suave e coberta com chocolate. Doçura e sofisticação em cada mordida.`,
    description: `A Éclair é uma sobremesa francesa clássica que combina leveza e sofisticação. Feita com massa choux, ela é recheada com um creme delicado e coberta com uma camada de chocolate. Perfeita para encerrar uma refeição ou para um lanche doce, a éclair é uma escolha elegante que agrada a todos os paladares. Serve: 1 pessoa`,
    price: 18.0
  }
]

export default produtos
