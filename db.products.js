const products = [
  {
    name: "Maranta Lemon Lime",
    description: `Maranta is commonly known as the Prayer plant because of the way in which their leaves fold together following the removal of bright light - a behavior called nyctinasty. These plants are closely related to Calathea genera, and have the same striking variegated leaves. This particular variety also known as leuconeura had bold green and neon patterns and is a little harder to find.`,
    summary:
      "Jazz up your living room with the hardy Maranta's unique folding leaf action. That's sure to impress your guests!",
    upkeep: "Hard",
    price: 22,
    img: "maranta-lime.webp",
    stock: 1,
    categoryId: 1,
  },
  {
    name: "Aglaonema Siam Pink",
    description: `Aglaonema or the Chinese Evergreen are some of the hardiest plants. They have unique patterns on each leaf and come in a few different variegated varieties. Aglaonema have been grown as luck-bringing ornamental plants in Asia for centuries. In summer you may see it bloom small flowers that eventually turn into berries. These plants can adapt well to medium light conditions.`,
    summary:
      "Add a touch of pink panache and rejuvenating freshness with Aglaonema's stunning foliage and air-purifying properties.",
    upkeep: "Easy",
    price: 22,
    img: "Aglo-pink.webp",
    stock: 2,
    categoryId: 2,
  },
  {
    name: "Alocasia Reginula 'Black Velvet'",
    description: `If you are fond of all black foliage, this is the variety for you. These plants usually stay small and classy! Alocasia or Elephant’s ear is a large, evergreen perennial from damp sites in south and southeast Asia. Its large arrow-shaped leaves come in a variety of green hues overlaid with splotches of black, purple, or aged copper. They love warm humid environments so keep your Alocasia away from air conditioners and cold drafts.`,
    summary:
      'Looking for some serious style to bring into your space? Meet Alocasia Reginula - the "Black Velvet" plant that demands maximum attention and minimal effort.',
    upkeep: "Easy",
    price: 24,
    img: "Alocasia-black-velvet.webp",
    stock: 3,
    categoryId: 3,
  },
  {
    name: "Crocodile Fern",
    description: `Crocodile ferns (Microsorum musifolium) have very unique leaves resembling the distinctive leathery appearance of crocodile skin. They are native to Southeast Asia and Australia where they are found growing on trees in warm, brightly lit, humid jungles.
      
    Ferns are among the oldest living plants on earth. There are an estimated 15000 varieties in existence and they don’t produce fruits or seeds, instead reproducing by spores. Fern species live in a wide variety of habitats, from remote mountain elevations, to dry desert rock faces, to bodies of water or in open fields.`,
    summary:
      "Get your hands on the crocodile fern, the fierce and hardy houseplant that will make your friends green with envy!",
    upkeep: "Medium",
    price: 24,
    img: "Crocodile-fern.webp",
    stock: 1,
    categoryId: 1,
  },
  {
    name: "Dragon's Tongue",
    description: `Hemigraphis Repanda, commonly known as Dragon’s Tongue, belongs to the Acanthaceae family and is native to Malaysia and India. The first half of the scientific name “Hemigraphis” is a Greek word – hemi means “half” and graphis means a “stylus or paintbrush”. They would thrive when grown emersed in a high humidity environment such as terrariums or paludariums.`,
    summary:
      "Unleash the fiery beauty of Dragon's Tongue in your home, with easy care that won't singe your schedule!",
    upkeep: "Hard",
    price: 24,
    img: "Dragon_s-tongue.webp",
    stock: 18,
    categoryId: 3,
  },
  {
    name: "Euphorbia Tortilis Cactus",
    description: `Tortilis is a large tree forming Euphorbia spurge from India. Don't mess with these cacti! Spiraling twisted short segmented branches and stems with extremely short, hard and sharp spines, form an impenetrable predator free zone for nesting birds.
      
    Succulents are a group of plants that have some parts that are more than normally thickened and fleshy, usually to retain water in arid climates or soil conditions. While they do need water to survive, they can endure extended periods of drought. Nearly all cacti are succulents, but not all succulents are cacti.`,
    summary:
      "Hip desert vibes will fill your home with Euphorbia Tortilis - the plant that's so low-maintenance, it practically takes care of itself!",
    upkeep: "Medium",
    price: 40,
    img: "Euphorbia.webp",
    stock: 18,
    categoryId: 1,
  },
  {
    name: "Piper Crocatum",
    description: `Piper Crocatum plants, also known as a Celebes Pepper, Piper Plant, or Piper Ornatum, are native to Peru and South America and they live in the tropical rainforests under the canopy. The Piper Crocatum is a unique plant that is hard to find. The heart-shaped foliage is a dark green with vain like pink markings. It is a vining plant that loves to climb up a moss pole or stake.`,
    summary:
      "Piper Crocatum is the low-maintenance herbaceous pal that's as stylish and radiant as you are, with the power to purify the air!",
    upkeep: "Easy",
    price: 52,
    img: "Piper-Crocatum.webp",
    stock: 18,
    categoryId: 3,
  },
  {
    name: "Zamioculcus Zamiifolia / 'Zenzi'",
    description: `Zamioculcus Zamiifolia 'Zenzi' is a cousin of the more common variety ZZ plant. Zenzi is a dwarf cultivar with plumper stems and leaves. The ZZ plant care starts with a lack of care! This plant loves being left alone. Beneath the plants are thick, potato-like roots known as rhizomes that store water, which is why it does great in periods of draught. People often mistake this for a fake plant because of its waxy leaves.`,
    summary:
      "Level up your indoor jungle with the sleek and self-sufficient Zamioculcus Zamiifolia - the ultimate addition to your plant posse!",
    upkeep: "Medium",
    price: 28,
    img: "Zenzi.webp",
    stock: 18,
    categoryId: 4,
  },
  {
    name: "Agave Victoria Reginae Variegated",
    description: `Agave victoria-reginae variegata is indigenous to Northern Mexico. Agave species are used to make tequila, pulque, and mezcal, while others are valued for their fibers. They are very slow growing. It develops a dense rosette of thick and stiff dark green leaves with a yellow margin and narrow white lines running through them.
      
    Succulents are a group of plants that have some parts that are more than normally thickened and fleshy, usually to retain water in arid climates or soil conditions. While they do need water to survive, they can endure extended periods of drought.`,
    summary:
      "Spruce up your space with the resilient and stylish Agave Victoria Reginae - a low-maintenance desert darling that's sure to make your plant collection bloom with sophistication!",
    upkeep: "Hard",
    price: 32,
    img: "agave-reginae-victoriae-variegata.webp",
    stock: 18,
    categoryId: 5,
  },
  {
    name: "Agave Geminiflora",
    description: `A perfect and small agave with fine needle like stalks. It's native to Central America and can reach 2-3 feet tall in the right conditions. It is great for new plant parents or people who travel a lot.
      
    Succulents are a group of plants that have some parts that are more than normally thickened and fleshy, usually to retain water in arid climates or soil conditions. While they do need water to survive, they can endure extended periods of drought.`,
    summary:
      "Add a touch of desert glam to your interior design with the fashionable Agave Geminiflora - the hardy houseplant for busy botanic enthusiasts!",
    upkeep: "Easy",
    price: 24,
    img: "agave.webp",
    stock: 18,
    categoryId: 3,
  },
  {
    name: "Alocasia Tiny Dancer",
    description: `Alocasia or Elephant’s ears are large, evergreen perennials from damp sites in south and southeast Asia. The Tiny Dancer is a newly developed hybrid of the Alocasia Morocco. It is known for its tiny cupped leaves and unique growth pattern that makes it look like it's dancing. They love warm humid environments so keep your Alocasia away from air conditioners and cold drafts.`,
    summary:
      "Get ready to turn up the tropical vibes with the stunning Alocasia Tiny Dancer - the perfect houseplant for a low-maintenance dance party!",
    upkeep: "Medium",
    price: 22,
    img: "alocasia-tiny-dancer.webp",
    stock: 18,
    categoryId: 3,
  },
  {
    name: "Begonia Maculata",
    description: `Begonia Maculata, also known as the polka-dot Begonia is a unique beauty. It is a tropical and subtropical flowering plant native to the rainforests of Brazil. Known for its olive green, angel wing shaped leaves, with contrasting silver polka-dots and deep purple under leaf.
    
    Polka dot begonias are monoecious, meaning they have both male and female flowers. Their flowers are white to light pink and grow in hanging clusters.`,
    summary:
      "Make your home a jungle paradise with Begonia Maculata's unique polka-dot leaves - a low-maintenance plant partner to add some pizzazz without any fuss!",
    upkeep: "Easy",
    price: 26,
    img: "begonia-maculata.webp",
    stock: 18,
    categoryId: 3,
  },
  {
    name: "Calathea Medallion",
    description: `Hemigraphis Repanda, commonly known as Dragon’s Tongue, belongs to the Acanthaceae family and is native to Malaysia and India. The first half of the scientific name “Hemigraphis” is a Greek word – hemi means “half” and graphis means a “stylus or paintbrush”. They would thrive when grown emersed in a high humidity environment such as terrariums or paludariums.`,
    summary:
      "Impress without the stress with Calathea Medallion - the perfect companion for your low maintenance interior oasis!",
    upkeep: "Hard",
    price: 18,
    img: "calathea-medallion.webp",
    stock: 18,
    categoryId: 4,
  },
  {
    name: "Calathea White Fusion",
    description: `Calathea lietzei, commonly known as White Fusion is a gorgeous variety with color markings like no other plant. The backs of the leaves are a gorgeous deep purple and there is white and green markings in the front. These plants are hard to come by, and can be a tad bit of work to maintain, so we don't recommend these for absolute beginners.
      
    Calathea varieties include some of the most stunning tropical foliage plants in the world and are often confused with their close relative Maranta or the “prayer plant”. These plants grow on the bed of the tropical forest and have large leaves to catch the dripping water from trees.`,
    summary:
      "Its uniquely patterned leaves dance in response to sunlight! Doesn't that sound like a good time?",
    upkeep: "Easy",
    price: 24,
    img: "calathea_whitefusion.webp",
    stock: 18,
    categoryId: 1,
  },
  {
    name: "Ficus Ginseng",
    description: `Ficus Microcarpa, also known as Chinese Banyan. Ficus microcarpa 'Ginseng' is a cultivar used extensively in bonsai for its bulbous, thick roots reminiscent of ginseng that rise out of the ground. This variety can often be grafted with Ficus Retusa, which makes it confusing sometimes to identify correctly.
    
    If you've ever been curious about having a bonsai plant at home, this is a perfect variety to try and start with. Common varieties of these plants have been cultivated since ancient times.`,
    summary:
      "Get your zen on with Ficus Ginseng - an undemanding, slow-growing plant with unique aerial roots. Are you ready to grow alongside it?",
    upkeep: "Medium",
    price: 22,
    img: "ficus-ginseng.webp",
    stock: 18,
    categoryId: 5,
  },
  {
    name: "Ponytail Palm",
    description: `Beaucarnea recurvata, commonly known as Ponytail Palm is part of the Asparagaceae family (same as edible asparagus) and native to the deserts in southeastern Mexico. Neither a palm nor a tree, this plant is actually a succulent therefore being very low maintenance.
      
    Succulents are a group of plants that have some parts that are more than normally thickened and fleshy, usually to retain water in arid climates or soil conditions. While they do need water to survive, they can endure extended periods of drought.`,
    summary:
      "The rustic, drought-resistant plant to bring the beach to your living room. Its unique swollen base is sure to make a statement!",
    upkeep: "Hard",
    price: 28,
    img: "ponytail-palm.webp",
    stock: 18,
    categoryId: 5,
  },
  {
    name: "Silver Dollar Vine",
    description: `Silver Dollar Plant (Xerosicyos danguyi) is a succulent plant native to South Africa in the jade family. It is often grown as a houseplant and has attractive rounded blue-gray leaves with maroon edges and small maroon speckles on the upper surface. It is an attractive small shrub with multiple thick stems that can grow to 4 feet long.
    
    Succulents are a group of plants that have some parts that are more than normally thickened and fleshy, usually to retain water in arid climates or soil conditions. While they do need water to survive, they can endure extended periods of drought.`,
    summary:
      "Add some bling to your succulent collection with the Silver Dollar Vine - a trailing treasure with round leaves that shimmer in the sunlight!",
    upkeep: "Medium",
    price: 30,
    img: "silver-coin-succulent.webp",
    stock: 18,
    categoryId: 1,
  },
  {
    name: "Sansevieria Moonshine",
    description: `Snake plants usually don't need an intrduction since they surface on every plant list, but Moonshine or trifasciata is a lesser common variety that is as hardy as the other snakes. Sansevieria are succulent plants--they have strong, stiff, almost plastic-like succulent leaves that store water.
      
    These particular variety is sold under many different names like craigii, jacquinii, and laurentii superba. We usually get them in a few different styles/varieties so we have created two options for easy ordering. The plant you receive may differ a tiny bit but will be close to the pictured style.`,
    summary:
      "Ready to get moonstruck? The Sansevieria Moonshine is your new virtually indestructible botanic buddy with a unique silvery-blue hue!",
    upkeep: "Easy",
    price: 24,
    img: "snake-moonshine.webp",
    stock: 18,
    categoryId: 5,
  },
  {
    name: "Zamioculcas Zamiifolia 'Dowon' / ZZ Raven",
    description: `The ZZ plant care starts with a lack of care! This plant loves being left alone. Beneath the plants are thick, potato-like roots known as rhizomes that store water, which is why it does great in periods of draught. People often mistake this for a fake plant because of its waxy leaves. This cultivar has lime green new growth that turns a dramatic purple-black color as it ages.`,
    summary:
      "Embrace modern life with the ZZ Raven. Remarkable dought tolerance makes its stylish glossy leaves the perfect choice for plant parents on the go.",
    upkeep: "Easy",
    price: 46,
    img: "stapelia-starfish-cactus.webp",
    stock: 18,
    categoryId: 5,
  },
  {
    name: "Cebu Blue Hanging Basket",
    description: `This Epipremnum Pinnatum aka Cebu Blue Pothos is known for its shimmery, sliver-blue leaves native to Cebu in the Philippines. Sometimes called dragon-tail, it is a beautiful, locally-grown vining plant that is easy to care for and perfect for beginners wanting a more unique Pothos variety. When this plant reaches maturity, fenestrations will start to form similar to the Philodendron swiss cheese plant!`,
    summary: "Unleash the Dragon-tail: Discover the Beauty of Cebu Blue Pothos.",
    upkeep: "Hard",
    price: 28,
    img: "cebu Blue Hanging.webp",
    stock: 8,
    categoryId: 6,
  },
  {
    name: "Scindapsus Hanging Basket",
    description: `Scindapsus belong to the Araceae family, and are commonly sold as Satin Pothos or Silver Philodendron. These plants are locally grown and are perfect for beginners. We carry two varieties of Scindapsus, the big leaf aka Scindapsus pictus 'Exotica' and the small leaf aka Scindapsus pictus 'Argyraeus'.
      
    We have these hanging plant baskets in two manageable sizes that can be repotted easily, or you can keep them as is.`,
    summary: "Shimmer in Style: Elevate Your Space with Satin Pothos.",
    upkeep: "Easy",
    price: 26,
    img: "satin-exotica-new_800x.webp",
    stock: 7,
    categoryId: 6,
  },
  {
    name: "Zamioculus Zamifolia / ZZ",
    description: `The ZZ plant care starts with a lack of care! This plant loves being left alone. Beneath the plants are thick, potato-like roots known as rhizomes that store water, which is why it does great in periods of draught. People often mistake this for a fake plant because of its waxy leaves. `,
    summary: "ZZ Plant: The Low-Maintenance Houseplant That Thrives on Neglect.",
    upkeep: "Medium",
    price: 32,
    img: "Zamicolus.webp",
    stock: 12,
    categoryId: 2,
  },
  {
    name: "Hardy Epiphyte Tillandsia Cyanea",
    description: `This beauty is commonly known as the pink quill part of the Bromeliad family and native to Ecuador. Bromeliad are epiphytic plants that grow on trees or rocks, but they are not parasitic and simply use the structures as perches from which they gather sun and moisture.
      
    Unlike most Tillandsia species, the pink quill can be grown in a pot as well as an air plant. Because the roots don't take in water, they gather moisture and nutrients through their leaves. These moisture loving plants love a good misting or humidifier.`,
    summary:
      "Discover the Delicate Beauty of Pink Quill: The Unique Epiphytic Bromeliad from Ecuador.",
    upkeep: "Hard",
    price: 29,
    img: "Tillandsia-cyanea.webp",
    stock: 14,
    categoryId: 2,
  },
  {
    name: "Fernwood Mikado",
    description: `This is a smaller but indestructible variety of Dracaena (snake plant). This plant has strong, stiff, cylindrical leaves that store water. Snake plants are a bit unique because unlike most other plants they produce oxygen in the night, making them ideal for your bedroom.`,
    summary: "Small but Mighty: Meet the Indestructible Snake Plant Perfect for Your Bedroom.",
    upkeep: "Hard",
    price: 16,
    img: "snakefernwood.webp",
    stock: 23,
    categoryId: 2,
  },
  {
    name: "Philodendron Hybrid",
    description: `Philo hybrids have been developed by growers in the past few years. Common and rare varieties include Imperial, Congo, Autumn, Prince of orange to name a few. They are also called self-heading philodendrons. These plants are both attractive and very easy to care for. We usually carry Green (moonlight), Red (imperial) and Orange hybrids and shipping is based on what's available from our growers.`,
    summary:
      "Discover the Stunning World of Philo Hybrids: Low-Maintenance, Self-Heading Plants in a Rainbow of Colors.",
    upkeep: "Easy",
    price: 18,
    img: "philo_imperial_900x.webp",
    stock: 28,
    categoryId: 2,
  },
  {
    name: "Monstera Siltepecana",
    description: `Siltepecana have narrow green leaves with silver-gray markings, much like the cebu-blue. Monsteras are often miscategorized as Philodendron but they are not from the same genus. As this plant matures it turns epiphytic, meaning it can grow on other things. Mature leaves can also develop fenestrations or holes.`,
    summary:
      "Discover the Unique Characteristics of Siltepecana and Monstera Plants: Silver-Green Leaves and Epiphytic Growth.",
    upkeep: "Medium",
    price: 24,
    img: "monstera-siltepecana_900x.webp",
    stock: 27,
    categoryId: 2,
  },
  {
    name: "Peperomia Green",
    description: `Peperomia obtusifolia or the baby rubber plant is from the pepper family. A versatile plant that can sustain a bit of abuse and has minimalist waxy spoon like leaves. These plants have semi-succulent properties, which means that they are able to store moisture in their fleshy stems or leaves to fall back on when needed. These are ‘easy to care’ for plants with an extensive variety. They can also easily be propagated just from a leaf cutting.`,
    summary: "The Versatile and Low-Maintenance Baby Rubber Plant with Succulent Properties.",
    upkeep: "Medium",
    price: 36,
    img: "Peperomia-green_900x.webp",
    stock: 13,
    categoryId: 2,
  },
  {
    name: "Scindapsus Jade",
    description: `Scindapsus Jade or Dark belong to the Araceae family, and are commonly sold as Satin Pothos. This particular variety is a rare relative of Scindapsus pictus. These plants are locally grown and are perfect for beginners. This is a vining plant that loves to climb, and can be potted in a hanging basket.`,
    summary: "A Rare and Easy-to-Grow Vining Plant Perfect for Beginners.",
    upkeep: "Easy",
    price: 12,
    img: "Scindapsus-jade_900x.webp",
    stock: 24,
    categoryId: 2,
  },
  {
    name: "String of Hearts Hanging Basket",
    description: `The Ceropegia woodii aka String of Hearts is a semi-succulent plant native to South Africa. In the spring and summer, it will produce small purple flowers and goes dormant in the colder months. When given the right light, it can grow anywhere from 3 feet to 9 feet long!`,
    summary:
      "Unlock the Charm of Ceropegia Woodii: A Beautiful and Low-Maintenance Plant with Long String-Like Vines and Gorgeous Purple Flowers.",
    upkeep: "Medium",
    price: 26,
    img: "string-new_900x.webp",
    stock: 15,
    categoryId: 6,
  },
  {
    name: "Spider Hanging Basket",
    description: `This Chlorophytum comosum aka Spider plant is known for the tiny Spiderettes that string off the plant, making it a perfect fit for a hanging basket. You can leave these baby spider plants on the stem until they grow roots, and you'll end up with different spider plants to share with friends!`,
    summary:
      "Get to Know Chlorophytum Comosum: The Spider Plant with Tiny Spiderettes That Make Great Hanging Baskets and Easy Propagation.",
    upkeep: "Medium",
    price: 23,
    img: "spider--new_900x.webp",
    stock: 10,
    categoryId: 6,
  },
  {
    name: "Photos Hanging Basket",
    description: `Pothos is also known as the devil's ivy, because it is almost impossible to kill. It is popular in temperate regions and is a great choice for a houseplant. It can handle low-light conditions and is known to be  an excellent air-purifier. All of it’s varieties have long-growing, leafy vines, some that can reach 40 feet or more in tropical jungles.

    We have these hanging plant baskets in two manageable sizes that can be repotted easily, or you can keep them as is.`,
    summary:
      "Discover the Devil's Ivy: Pothos, the Low-Maintenance Houseplant with Long Vines and Excellent Air-Purifying Qualities, Now Available in Hanging Baskets.",
    upkeep: "Easy",
    price: 29,
    img: "pothos-multi-new_900x.webp",
    stock: 8,
    categoryId: 6,
  },
  {
    name: "Pothos",
    description: `Pothos is also known as the devil's ivy, because it is almost impossible to kill. It is popular in temperate regions and is a great choice for a houseplant. It can handle low-light conditions and is known to be  an excellent air-purifier. All of its varieties have long-growing, leafy vines, some that can reach 40 feet or more in tropical jungles.
      
    We receive a few different varieties of the variegated pothos, so the plants may differ a bit. Most common ones that we ship out are Marble Queen, Golden and Jade. To adapt better to low-light conditions the leaves sometimes turn darker green.`,
    summary:
      "Bring Life to Your Home with Variegated Pothos: The Devil's Ivy that Thrives in Low-Light and Purifies the Air, Available in Multiple Varieties.",
    upkeep: "Hard",
    price: 18,
    img: "pothos_900x.webp",
    stock: 26,
    categoryId: 4,
  },
  {
    name: "Monstera Standleyana `Albo`",
    description: `Albo have oval green leaves about 6 inches in length. The leaves can have white/cream speckles or big white strokes on them. This variety is really hardy and easy to care for. Monsteras are often misidentified as Philodendron but they are not from the same genus.`,
    summary:
      "Discover the Beauty of Albo: A Hardy and Easy-to-Care-for Variety of Monstera with Striking White Strokes and Speckles on Its Oval Green Leaves.",
    upkeep: "Medium",
    price: 46,
    img: "monstera-standleyana-albo_900x.webp",
    stock: 4,
    categoryId: 4,
  },
  {
    name: "Humidity Queen, Crispy Wave Fern",
    description: `This Asplenium fern is one of our most beloved plants. It's one of the hardiest varieties of ferns available in the market currently, which is why it's also included in all our subscription plans.
    
    Ferns are among the oldest living plants on earth. There are an estimated 15000 varieties in existence and they don’t produce fruits or seeds, instead reproducing by spores. Fern species live in a wide variety of habitats, from remote mountain elevations, to dry desert rock faces, to bodies of water or in open fields.`,
    summary: "Beloved Asplenium Fern: Hardy and Included in Our Subscription Plans.",
    upkeep: "Easy",
    price: 16,
    img: "fern_800x.webp",
    stock: 33,
    categoryId: 1,
  },
  {
    name: "Peperomia Hope",
    description: `Peperomia hope is a hybrid peperomia earning the name Peperomia deppeana×quadrifolia, native to Central and South America. It is often nicknamed "Trailing Jade" because of its trailing nature. The subtle stripes on the thick, bright green leaves make this plant unique!
    
    These plants have semi-succulent properties, which means that they are able to store moisture in their fleshy stems or leaves to fall back on when needed. These are ‘easy to care’ for plants with an extensive variety. They can also easily be propagated just from a leaf cutting.`,
    summary: "A Unique Trailing Plant with Semi-Succulent Properties.",
    upkeep: "Easy",
    price: 18,
    img: "hope_1000x.webp",
    stock: 28,
    categoryId: 1,
  },
  {
    name: "Calathea Rattlesnake",
    description: `Calathea Lancifolia, commonly known as Rattlesnake because of its beautiful snake like markings is one of the most beautiful plants in our collection. 

    Calathea varieties include some of the most stunning tropical foliage plants in the world and are often confused with their close relative Maranta or the “prayer plant”. These plants grow on the bed of the tropical forest and have large leaves to catch the dripping water from trees.`,
    summary: "A Stunning Tropical Foliage Plant with Rattlesnake Markings.",
    upkeep: "Hard",
    price: 18,
    img: "rattlesnake2_700x.webp",
    stock: 24,
    categoryId: 1,
  },
  {
    name: "Stromanthe Triostar",
    description: `This stunning plant with pink variegation is from the prayer plant family (Maranta species), and follows the same open and close circadian rhythm in their leaves. This action is known as nyctinasty and is caused by changes in water pressure in the nodes located at the leaf base.`,
    summary: "A Stunning Prayer Plant with Nyctinastic Leaf Movement.",
    upkeep: "Hard",
    price: 22,
    img: "stromanthe_1000x.webp",
    stock: 23,
    categoryId: 1,
  },
  {
    name: "Philodendron White Knight",
    description: `White Knight is a hybrid Philodendron, that has natural occurring white variegation. These plants have oval leaves, unlike the pointy leaves of the Pink Princess. Philo hybrids are generally developed and cultivated by growers for their rare variegations. Common varieties include Imperial, Congo, Autumn, Prince of orange, Pink Princess to name a few. They are also called self-heading philodendrons. These plants are both attractive and very easy to care for.

    We also have a few very rare White Princess varieties which is a hybrid of the white knight and pink princess. You will notice a yellowish tint in some cases on these which is just the characteristic of the plant, and not necessarily a defect.`,
    summary: "White Knight Philodendron: A Rare Hybrid with Natural White Variegation.",
    upkeep: "Medium",
    price: 75,
    img: "Philodendron-White-Knight_1000x.webp",
    stock: 7,
    categoryId: 3,
  },
  {
    name: "Monstera Siltepecana",
    description: `Siltepecana have narrow green leaves with silver-gray markings, much like the cebu-blue. Monsteras are often miscategorized as Philodendron but they are not from the same genus. As this plant matures it turns epiphytic, meaning it can grow on other things. Mature leaves can also develop fenestrations or holes.`,
    summary: "A Unique Plant with Narrow Leaves and Silver-Grey Markings.",
    upkeep: "Medium",
    price: 23,
    img: "monstera-siltepecana_1000x.webp",
    stock: 28,
    categoryId: 3,
  },
  {
    name: "Neanthe Bella Palm",
    description: `Bella or Parlor Palm is a great easy to care for variety of palms that can live comfortably indoors. These plants grow fast and unlike most plants that suffer if they are root-bound, palms seem to do okay if their roots are a little crammed.`,
    summary: "An Easy-to-Care-for Indoor Palm with Fast Growth.",
    upkeep: "Easy",
    price: 16,
    img: "palm_800x.webp",
    stock: 32,
    categoryId: 4,
  },
  {
    name: "Little Helper Kit",
    description: `Some plants may need a little extra watering help and this kit does exactly that. We have designed it around our favorite dancing plant Calathea lancifolia a.k.a rattlesnake and have included the most gorgeous hand blown glass crystal that slowly drips water into your plants over the course of 2-3 days.`,
    summary:
      "Self-Watering Kit for Calathea Lancifolia: Keep Your Rattlesnake Plant Hydrated with a Beautiful Hand-Blown Glass Crystal.",
    upkeep: "Hard",
    price: 45,
    img: "crystal_800x.webp",
    stock: 16,
    categoryId: 4,
  },
  {
    name: "Calathea Pinstripe",
    description: `Calathea ornata is distinctively recognizable because of it's dark green leaves and thin pink stripes.

    Calathea varieties include some of the most stunning tropical foliage plants in the world and are often confused with their close relative Maranta or the “prayer plant”. These plants grow on the bed of the tropical forest and have large leaves to catch the dripping water from trees.`,
    summary: "A Distinctive Tropical Foliage Plant with Dark Green Leaves and Thin Pink Stripes.",
    upkeep: "Hard",
    price: 19,
    img: "pincalathea_800x.webp",
    stock: 36,
    categoryId: 4,
  },
  {
    name: "Low-Light Bundle",
    description: `This combination is not just great for low-light conditions but also an amazing air-purifying set. These silent air-scrubbers are known to remove air toxins like Formaldehyde, Toluene, Xylene from your indoor air. ZZ, Dracaena, and Sansevieria are all tough and forgiving plants when it comes to their care. We will be updating these plants often, so grab them while you can!.`,
    summary:
      "Low-Light Air Purifying Plant Set: ZZ, Dracaena, and Sansevieria - Perfect for Indoor Air Quality.",
    upkeep: "Medium",
    price: 60,
    img: "bundle_low_800x.webp",
    stock: 17,
    categoryId: 4,
  },
  {
    name: "Copper Spoons",
    description: `Kalanchoe is a genus of about 125 species of tropical and succulent plants in the family Crassulaceae, mainly native to Madagascar and tropical Africa. This slow-growing succulent has fuzzy bronze colored oval-shaped leaves which lends to many common names such as Copper Spoons, Cinnamon Bear, Leather Plant, Shoe Leather Kalanchoe. 

    Succulents are a group of plants that have some parts that are more than normally thickened and fleshy, usually to retain water in arid climates or soil conditions. While they do need water to survive, they can endure extended periods of drought. Nearly all cacti are succulents, but not all succulents are cacti.`,
    summary:
      "Slow-Growing Succulent with Fuzzy Bronze-Colored Oval-Shaped Leaves, Native to Madagascar and Tropical Africa.",
    upkeep: "Medium",
    price: 20,
    img: "copperspoon_800x.webp",
    stock: 25,
    categoryId: 5,
  },
  {
    name: "Ficus Lyrata / Fiddle-Leaf Fig",
    description: `Ficus Lyrata or the Fiddle-leaf Fig is native to West Africa, growing in the rainforests. When you dream about having an indoor tree, you are probably thinking about a ficus or a fig tree. Common varieties of these plants have been cultivated since ancient times for their fruits, and they also have a lot of cultural importance as objects of worship.`,
    summary:
      "Indoor Tree Native to West Africa, Also Known as Fiddle-leaf Fig, Cultivated for Fruits and Cultural Significance.",
    upkeep: "Medium",
    price: 18,
    img: "fiddle_800x.webp",
    stock: 28,
    categoryId: 5,
  },
  {
    name: "Sunny Bundle",
    description: `Here's a combination that can absorb the sun and shine its brightness back to you all year! A great combo for sunny apartments and bright window sills. Our succulents come from dry and lovely Arizona, and we have combined these plants with our hand-painted terra-cotta pots in two different colors. The variety of plants might vary from the ones pictured here.`,
    summary: "Discover the Beauty of Rare and Exotic Houseplants.",
    upkeep: "Medium",
    price: 32,
    img: "sunny1_800x.webp",
    stock: 9,
    categoryId: 5,
  },
  {
    name: "Philodendron Hanging Basket",
    description: `Philodendron hederaceum aka Philodendron Brasil is native to South America and is a patented heart-leaf philodendron.`,
    summary: "Meet the Philodendron Brasil: A Colorful Twist on a Classic Houseplant.",
    upkeep: "Easy",
    price: 22,
    img: "brasil--new_800x.webp",
    stock: 33,
    categoryId: 6,
  },
  {
    name: "Diy Hanging Staghorn",
    description: `You have probably already seen these wondrous ferns hanging on the wall of your plant-loving friend’s home. Now you can attain this living piece of art at a much cheaper cost, and the do-it-yourself construction will only enhance the joy of mounting this all-vegan trophy on your wall!`,
    summary: "Headline: Create Your Own Living Wall Art with DIY Fern Kits!",
    upkeep: "Easy",
    price: 40,
    img: "stag2_800x.webp",
    stock: 13,
    categoryId: 6,
  },
  {
    name: "Hoya Obovata",
    description: `A classic beauty that you probably remember from your childhood. Wax plant or Hoya comes in hundreds of varieties and in the right condition they bloom perfectly geometrical flowers. Hoya obovata is a unique variety that have thick large, deep green oval leaves that often have a silver ‘splash’ pattern.`,
    summary: "Wax Plant or Hoya: A Classic Beauty with Hundreds of Varieties to Choose From!",
    upkeep: "Medium",
    price: 30,
    img: "Hoya-obovata_700x.webp",
    stock: 12,
    categoryId: 1,
  },
  {
    name: "Hoya Carnosa",
    description: `A classic beauty that you probably remember from your childhood. Wax plant or Hoya comes in hundreds of varieties and in the right condition they bloom perfectly geometrical flowers often called porcelain flowers.`,
    summary: "The Timeless Beauty of Wax Plants.",
    upkeep: "Easy",
    price: 22,
    img: "Hoya1_1200x.webp",
    stock: 29,
    categoryId: 1,
  },
  {
    name: "Pilea Peperomioides",
    description: `The Chinese Money Plant or Pilea peperomioides has been spread amongst amateur gardeners via cuttings without being well-known to botanists. Which is probably why it is slightly harder to find in many regions. These plants are low maintenance and can be propagated very easily. 

    This plant is originally from the southwestern Yunnan province of China. Popular lore maintains that a Norwegian missionary, Agnar Espegren, took cuttings home with him in the 1940s, and shared them with friends and family. Those plants were spread throughout Scandinavia, and eventually the world, as people passed cutting between friends.`,
    summary: "Discover the Low-Maintenance Charm of Chinese Money Plants.",
    upkeep: "Hard",
    price: 18,
    img: "pilea-pep_700x.webp",
    stock: 34,
    categoryId: 1,
  },
  {
    name: "Pet-Friendly Bundle",
    description: `A perfect combination to start (or grow) your pet-friendly plant collection! We have combined the beautiful calathea rattlesnake with hardy peperomia obtusifolia to kick-off this bundle. We will be updating these plants often, so grab them while you can!

    We have crosschecked each plant species with ASCPA's library of non-toxic plants, and rest assured, none of them will cause any harm if ingested. But please be advised that even though a plant is non-toxic, the consumption of any plant material may still cause vomiting and gastrointestinal upset for dogs and cats.`,
    summary: "Calathea Rattlesnake and Peperomia Obtusifolia.",
    upkeep: "Medium",
    price: 32,
    img: "petbundle_700x.webp",
    stock: 22,
    categoryId: 1,
  },
  {
    name: "Maranta Prayer Red",
    description: `Maranta is commonly known as the Prayer plant because of the way in which their leaves fold together following the removal of bright light - a behavior called nyctinasty. These plants are closely related to Calathea genera, and have the same striking variegated leaves.

    We ship two different varieties of prayer plants: the red prayer plant with a bright green and bold red pattern, and the lemon lime, with neon and dark green shades.`,
    summary: "Prayer Plants: The Nyctinastic Marvels with Variegated Leaves.",
    upkeep: "Hard",
    price: 19,
    img: "maranta_700x.webp",
    stock: 36,
    categoryId: 1,
  },
  {
    name: "Philodendron Brasil",
    description: `Philodendron hederaceum or Brasil is native to South America and is a patented heart-leaf philodendron. The leaves look like they are colored in strokes of yellow and green, and resemble the flag of Brasil, hence the common name.

    Often confused with Pothos, this variety is fairly tolerant and easy to care for. They are also a great indoor choice because they remove air-born toxins such as formaldehyde from the air.`,
    summary: "The Low-Maintenance Houseplant that Purifies the Air.",
    upkeep: "Easy",
    price: 16,
    img: "brasil_700x.webp",
    stock: 38,
    categoryId: 2,
  },
  {
    name: "Horti Master Kit",
    description: `Horti's version of a masterclass on indoor planting! Thoughtfully designed to serve as a starter resource for new plant parents, that also serves as a great collectible for planting enthusiasts who might be farther along on the indoor planting journey. We have included the hardiest peperomia plant along with well-designed instructions to guide you on repotting, grooming and propagating your plants. This kit also includes are newly designed Houseplant Quickie Card that can help you manage 20 different varieties of plants.`,
    summary: "Masterclass for new plant parents!",
    upkeep: "Easy",
    price: 110,
    img: "masterkit-pep_35ee58a3-108a-4c48-a6ad-43d97fada839_700x.webp",
    stock: 6,
    categoryId: 2,
  },
  {
    name: "Grooming Kit",
    description: `After a lot of research, we have combined few of our favorite planting accessories, with a beautiful plant. These combinations are not just aesthetically pleasing but also very functional! This kit includes a handsome beechwood multi-tool for pruning and grooming plants, and a Pothos variety.`,
    summary: "Functional and Beautiful: Pothos Plant Kit with Beechwood Multi-Tool.",
    upkeep: "Hard",
    price: 45,
    img: "Grooming_700x.webp",
    stock: 25,
    categoryId: 2,
  },
  {
    name: "Royal Bundle",
    description: `We have combined two of these gorgeous rare varieties and created a royal bundle thats also heavily discounted! Both these plants are considered hybrid Philodendron, with natural occurring pink and white variegation. They are also called self-heading philodendrons and are very easy to care for.

    These plants are still hard to come by which is why the prices are still on the higher side. Philo hybrids are generally developed and cultivated by growers for their rare variegations.`,
    summary:
      "Rare Variegated Philodendron Hybrids Bundle: A Royal Combination at a Discounted Price!",
    upkeep: "Hard",
    price: 120,
    img: "royal-plants_700x.webp",
    stock: 11,
    categoryId: 3,
  },
  {
    name: "Philodendron Pink Proncess",
    description: `Pink princess is a hybrid Philodendron, that has natural occurring pink variegation. These plants are still hard to come by which is why the price is so high. Philo hybrids are generally developed and cultivated by growers for their rare variegations. Common varieties include Imperial, Congo, Autumn, Prince of orange to name a few. They are also called self-heading philodendrons. These plants are both attractive and very easy to care for.`,
    summary: "Discover Our Collection of Beautiful Indoor Plants",
    upkeep: "Medium",
    price: 75,
    img: "Philo-pink_700x.webp",
    stock: 5,
    categoryId: 3,
  },
  {
    name: "Rhaphidophora Decursiva",
    description: `Decursiva is robust climbing aroid with long aerial roots. In their natural habitat the leaves of this plant can grow up to 40 inches long. These plants are often categorized as Monstera, but despite having common descendants these are two different genera. You can use a moss poll to support its vining growth.`,
    summary: "A Robust Climbing Aroid with Long Aerial Roots",
    upkeep: "Easy",
    price: 22,
    img: "Rhaphidophora-Decursiva_700x.webp",
    stock: 15,
    categoryId: 3,
  },
  {
    name: "Philodendron Narrow Escape",
    description: `Philo Narrow comes from Central American jungles and produces long narrow stiff leaves. This is a really hardy variety of Philodendrons. If you are fond of plants that can bring in a feel of the deep forest into your home, this is the plant to consider.`,
    summary: "Hardy Central American Plant with Long, Narrow Stiff Leaves",
    upkeep: "Easy",
    price: 26,
    img: "philodendron_narrow-escape_700x.webp",
    stock: 12,
    categoryId: 3,
  },
  {
    name: "Sansevieria / Snake",
    description: `Honestly, this is probably one plant that doesn't need much introduction--it's on every possible "best plant for..." list. An all-around winner for being draught tolerant, and doing well both in low-light and direct sunlight situation (bizarre). Sansevieria are succulent plants--they have strong, stiff, almost plastic-like succulent leaves that store water. Plus, these are one of the few plants that release oxygen in the night so it’s ideal for your bedroom.

    We usually get them in a few different styles/varieties so we have created two options for easy ordering. The plant you receive may differ a tiny bit but will be close to the pictured style.`,
    summary:
      "The Versatile and Popular Sansevieria: A Succulent with a Unique Ability to Release Oxygen at Night.",
    upkeep: "Easy",
    price: 16,
    img: "snake_800x.webp",
    stock: 28,
    categoryId: 4,
  },
  {
    name: "Calathea Makayona",
    description: `This beautiful Peacock plant is the taller, slender sister of Calathea Rattlesnake. Its leaves resemble a peacock's tail, hence the name. 

    Calathea varieties include some of the most stunning tropical foliage plants in the world and are often confused with their close relative Maranta or the “prayer plant”. These plants grow on the bed of the tropical forest and have large leaves to catch the dripping water from trees.`,
    summary: "Peacock Plant: A Stunning Calathea Variety.",
    upkeep: "Medium",
    price: 18,
    img: "calathea_maka_700x.webp",
    stock: 21,
    categoryId: 4,
  },
  {
    name: "Cebu Blue Pothos",
    description: `This Epipremnum Pinnatum aka Cebu Blue Pothos is known for its shimmery, sliver-blue leaves native to Cebu in the Philippines. Sometimes called dragon-tail, it is a beautiful, locally-grown vining plant that is easy to care for and perfect for beginners wanting a more unique Pothos variety. When this plant reaches maturity, fenestrations will start to form similar to the Philodendron swiss cheese plant!`,
    summary: "A Unique and Easy-to-Care-For Pothos Variety.",
    upkeep: "Easy",
    price: 20,
    img: "cebu-blue_700x.webp",
    stock: 27,
    categoryId: 4,
  },
  {
    name: "Peperomia Beetle",
    description: `Peperomia angulata, aka Peperomia beetle is native to South America, found covering the ground level of tropical regions. This plant is very durable and would be a beautiful addition to a home trailing from a pot or hanging basket. 

    These plants have semi-succulent properties, which means that they are able to store moisture in their fleshy stems or leaves to fall back on when needed. These are ‘easy to care’ for plants with an extensive variety. They can also easily be propagated just from a leaf cutting.`,
    summary: "A Durable and Easy-to-Care-for Trailing Plant.",
    upkeep: "Medium",
    price: 18,
    img: "beetle_700x.webp",
    stock: 35,
    categoryId: 4,
  },
  {
    name: "Ficus Audrey",
    description: `Ficus Benghalensis or Ficus Audrey is the national tree of India. When you dream about having an indoor tree, you are probably thinking about a ficus or a fig tree. Common varieties of these plants have been cultivated since ancient times for their fruits, and they also have a lot of cultural importance as objects of worship.`,
    summary: "Ficus Audrey - The National Tree of India.",
    upkeep: "Hard",
    price: 18,
    img: "audrey_800x.webp",
    stock: 42,
    categoryId: 5,
  },
  {
    name: "Ficus Elastica Rubber Variegated",
    description: `Ficus Tineke and Ruby are variegated varieties of the commonly found rubber plant (Ficus Elastica Burgundy), with beautiful pink tint in the leaves.

    These plants are native to tropical rainforests of South-east Asian and South American region. In their native environments they can grow as big as 50-100 feet high as trees. Early Aztecs waterproofed their clothing and made their own shoes from the sap of this plant and in some regions it is still used in the modern process of making rubber. 
    
    These plants make for a great houseplant and do well in bright rooms. They are tolerant of dry environments, but are a bit finicky about sudden temperature changes.`,
    summary:
      "Variegated Ficus Tineke and Ruby - Beautiful Pink-Tinted Rubber Plants for Your Home.",
    upkeep: "Medium",
    price: 26,
    img: "rubber2_4b00aaba-0293-4406-921c-ffaa70495828_800x.webp",
    stock: 16,
    categoryId: 5,
  },
  {
    name: "Ficus Elastica Rubber",
    description: `Ficus Elastica or the Indian Rubber plant is native to tropical rainforests of South-east Asian and South American region. In their native environments they can grow as big as 50-100 feet high as trees. Early Aztecs waterproofed their clothing and made their own shoes from the sap of this plant and in some regions it is still used in the modern process of making rubber. 

    These plants make for a great houseplant and do well in bright rooms. They are tolerant of dry environments, but are a bit finicky about sudden temperature changes.
    
    We ship two different varieties depending on availability - Elastica Burgundy with deep red colored leaves and the other is Elastica Robusta with Green leaves.`,
    summary: "Ficus Elastica: A Classic Houseplant for Any Home.",
    upkeep: "Medium",
    price: 35,
    img: "rubber_800x.webp",
    stock: 15,
    categoryId: 5,
  },
  {
    name: "Aloe White Fox",
    description: `Aloe is a genus containing over 500 species of flowering succulent plants. Aloe White Fox displays rosettes of thick green and sometimes purple hues with white markings. Bright coral flowers appear on tall bloom stalks when this plant is thriving in bright light. 

    Succulents are a group of plants that have some parts that are more than normally thickened and fleshy, usually to retain water in arid climates or soil conditions. While they do need water to survive, they can endure extended periods of drought. Nearly all cacti are succulents, but not all succulents are cacti.`,
    summary: "A Beautiful Succulent with Rosettes of Thick Green Leaves and Coral Flowers.",
    upkeep: "Easy",
    price: 18,
    img: "Aloe-whitefox_800x.webp",
    stock: 33,
    categoryId: 5,
  },
  {
    name: "Philodendron Silver Sword",
    description: `Philodendron hastatum aka Silver Sword is a vining aroid from the tropics of Brazil. These silvery beauties are fast growers. When given a support or moss pole to climb onto, these plants grow quicker and produce larger leaves that are shaped like swords, hence the name!`,
    summary: "A Beautiful Succulent with Rosettes of Thick Green Leaves and Coral Flowers.",
    upkeep: "Hard",
    price: 22,
    img: "Philodendron-SilverSword_700x.webp",
    stock: 29,
    categoryId: 5,
  },
  {
    name: "Hoya Australis Lisa",
    description: `A classic beauty that you probably remember from your childhood. Wax plant or Hoya comes in hundreds of varieties and in the right condition they bloom perfectly geometrical flowers often called porcelain flowers. The Hoya Australis Lisa is a rare variety with variegated leaves growing from the center of the plant. `,
    summary: "Hoya Australis Lisa: A Classic Beauty with Variegated Leaves.",
    upkeep: "Easy",
    price: 26,
    img: "hoya_1000x.webp",
    stock: 34,
    categoryId: 5,
  },
  {
    name: "Propagation Kit",
    description: `After a lot of research, we have combined few of our favorite planting accessories, with a beautiful plant. These combinations are not just aesthetically pleasing but also very functional! This kit includes a baby snipper along with 3 cuttings vases that have been handcrafted in brooklyn, and a peperomia ripple.`,
    summary: "Planting accessory kit with Peperomia Ripple plant.",
    upkeep: "Hard",
    price: 55,
    img: "propagation_700x.webp",
    stock: 9,
    categoryId: 4,
  },
  {
    name: "Nice Smelling Kit",
    description: `In this kit, we have combined three amazing plants with our botanical luxury Plandles™! You can order the Forest Alchemy with a breezy tropical Palm (pet-friendly), the Sacred Woods with our beloved Pilea Peperomioides (pet-friendly), and the Desert Wisdom with a Jade.

    Our plant inspired candles—plandles—resulted from a year of researching the most luxurious blends of essential oils derived from nature. We collaborated with Davisburg Candle Factory, located in a historic building in Detroit, who have six decades of experience hand-making candles.
    
    Each candle is hand-poured in our signature terracotta pots and made with 12 oz (340 grams) of environmentally friendly 100% soy wax. Light the wick, close your eyes and breathe in calming botanicals, ancient woods and tropical rainforests.`,
    summary: "Botanical Plandles™ Kit: Candle and Plant Pairings.",
    upkeep: "Hard",
    price: 60,
    img: "plandle_palm_4072ce4f-c32e-4608-a303-533c0896aa2a_700x.webp",
    stock: 13,
    categoryId: 3,
  },
  {
    name: "Alocasia Baginda 'Dragon Scale'",
    description: `This is a highly desirable and rare Alocasia variety. Alocasia or Elephant’s ear is a large, evergreen perennial from damp sites in south and southeast Asia. It’s large arrow-shaped leaves come in a variety of green hues overlaid with splotches of black, purple, or aged copper. They love warm humid environments so keep your Alocasia away from air conditioners and cold drafts.`,
    summary: "Rare and Desirable Alocasia Plant with Unique Leaf Patterns.",
    upkeep: "Medium",
    price: 48,
    img: "Alocasia-dragon-scale_700x.webp",
    stock: 17,
    categoryId: 3,
  },
  {
    name: "Haworthia",
    description: `Haworthia or Zebra cactus are native to South Africa and they are closely tied to Aloe. These are very easy to care for succulents and come in over 150 different varieties. The genus name Haworthia commemorates Adrian Hardy Haworth, an accomplished British botanist and entomologist.

    Succulents are a group of plants that have some parts that are more than normally thickened and fleshy, usually to retain water in arid climates or soil conditions. While they do need water to survive, they can endure extended periods of drought. Nearly all cacti are succulents, but not all succulents are cacti.`,
    summary: "Haworthia or Zebra Cactus - Easy to Care for Succulents with 150+ Varieties.",
    upkeep: "Easy",
    price: 16,
    img: "Haworthia2_1000x.webp",
    stock: 32,
    categoryId: 2,
  },
  {
    name: "Staghorn Fern",
    description: `Staghorns or Platycerium are tropical plants, and in their native habitat they thrive as epiphytes, i.e, plants that derive moisture and nutrients from the air and rain.

    The staghorn is noticeably different from other plants, and even other ferns, due to its distinct anatomical make-up. It doesn’t have flowers and seeds, typical components of plant reproduction, but instead releases microscopic spores resembling brown fuzz into the air which become new plants, similar to the way fungi and moss reproduce. The precious spores are stored in the fern’s fronds (shield), which are often mistaken for leaves.`,
    summary: "Staghorn Ferns: Unique Anatomy and Reproduction.",
    upkeep: "Easy",
    price: 20,
    img: "staghorn_1000x.webp",
    stock: 38,
    categoryId: 2,
  },
  {
    name: "Peperomia Orba 'Pixie'",
    description: `Peperomia orba also known as the teardrop peperomia or pixie, noteworthy for its delicate, teardrop-shaped leaves. Native to Central and South America, Peperomias are members of the pepper plant family (Piperaceae). 

    These plants have semi-succulent properties, which means that they are able to store moisture in their fleshy stems or leaves to fall back on when needed. These are ‘easy to care’ for plants with an extensive variety. They can also easily be propagated just from a leaf cutting.`,
    summary: "Delicate Teardrop-Shaped Leaves of a Pepper Plant Family Member.",
    upkeep: "Easy",
    price: 22,
    img: "Pep_pixie_700x.webp",
    stock: 28,
    categoryId: 2,
  },
  {
    name: "Peperomia Ginny Pink-Edge",
    description: `Peperomia clusiifolia or Ginny or Pink-edge is from the pepper family. A versatile plant that can sustain a bit of abuse and has waxy pointy leaves. 

    These plants have semi-succulent properties, which means that they are able to store moisture in their fleshy stems or leaves to fall back on when needed. These are ‘easy to care’ for plants with an extensive variety. They can also easily be propagated just from a leaf cutting.`,
    summary: "The Versatile and Easy-to-Care-for Ginny Plant.",
    upkeep: "Medium",
    price: 18,
    img: "peperomia-ginny_700x.webp",
    stock: 37,
    categoryId: 2,
  },
  {
    name: "Satin Pothos",
    description: `These beautiful vining plants are a great choice for beginners. They have a matte like texture and feel a bit velvety to touch, hence the common name Satin. 

    Scindapsus pictus is commonly sold in the market as a Satin pothos or Silver philodendron, but it's neither a pothos or a philodendron. They are all cousins and belong to the same genus though. 
    
    The one with large heart-shaped leaves is 'Exotica' and the smaller one is 'Argyraeus', although to avoid confusion since most places sell them as Satin pothos we have also decided to retain that name.`,
    summary: "Satin Pothos: A Great Choice for Beginner Plant Parents.",
    upkeep: "Easy",
    price: 22,
    img: "satin_76a81edb-7204-4d2e-83ce-6ccd178a011c_700x.webp",
    stock: 28,
    categoryId: 2,
  },
  {
    name: "Crassula Jade",
    description: `With the correct balance of water and light, a Crassula ovata can be a plant that will stay with you for generations. This is also a very easy plant to propogate--almost every part of this succulent can make new plants.

    Succulents are a group of plants that have some parts that are more than normally thickened and fleshy, usually to retain water in arid climates or soil conditions. While they do need water to survive, they can endure extended periods of drought. Nearly all cacti are succulents, but not all succulents are cacti.`,
    summary: "Crassula ovata: The Long-Lasting Succulent.",
    upkeep: "Hard",
    price: 16,
    img: "Jade_c4f7cace-cdf2-43c5-9d9b-896f1bdb1255_700x.webp",
    stock: 30,
    categoryId: 3,
  },
];

module.exports = products;
