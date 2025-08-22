const cats = [
    {
      "id": 1,
      "name": "Барсик",
      "age": 2,
      "gender": "мальчик",
      "color": "серый",
      "breed": "Шотландская вислоухая",
      "category": "котята/подростки",
      "description": "Ласковый и игривый котёнок. фшфоыфоошы Ласковый и игривый котёнок. фшфоыфоошы Ласковый и игривый котёнок. фшфоыфоошы Ласковый и игривый котёнок. фшфоыфоошы Ласковый и игривый котёнок. фшфоыфоошы Ласковый и игривый котёнок. фшфоыфоошы Ласковый и игривый котёнок. фшфоыфоошы Ласковый и игривый котёнок. фшфоыфоошы",
      "image": "https://images.unsplash.com/photo-1603311373659-fbb9e1e89b72?auto=format&fit=crop&w=400&q=80",
      "images": [
        "https://images.unsplash.com/photo-1603311373659-fbb9e1e89b72?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1603311373659-fbb9e1e89b72?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1603311373659-fbb9e1e89b72?auto=format&fit=crop&w=400&q=80"
      ]
    },
    {
      "id": 2,
      "name": "Мурка",
      "age": 3,
      "gender": "девочка",
      "color": "трёхцветный",
      "breed": "Сибирская",
      "category": "кошки/коты",
      "description": "Очень умная и спокойная кошка.",
      "image": "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?auto=format&fit=crop&w=400&q=80",
      "images": [
        "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?auto=format&fit=crop&w=400&q=80"
      ]
    },
    {
      "id": 3,
      "name": "Снежок",
      "age": 1,
      "gender": "мальчик",
      "color": "белый",
      "breed": "Персидская",
      "category": "котята/подростки",
      "description": "Обожает играть с детьми.",
      "image": "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=400&q=80",
      "images": [
        "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=400&q=80"
      ]
    },
    {
      "id": 4,
      "name": "Рыжик",
      "age": 8,
      "gender": "мальчик",
      "color": "рыжий",
      "breed": "Другая",
      "category": "кошки от 8 лет",
      "description": "Очень добрый и спокойный кот.",
      "image": "https://images.unsplash.com/photo-1583337130417-3346a1b2a5c0?auto=format&fit=crop&w=400&q=80",
      "images": [
        "https://images.unsplash.com/photo-1583337130417-3346a1b2a5c0?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1583337130417-3346a1b2a5c0?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1583337130417-3346a1b2a5c0?auto=format&fit=crop&w=400&q=80"
      ]
    },
    {
      "id": 5,
      "name": "Луна",
      "age": 5,
      "gender": "девочка",
      "color": "чёрный",
      "breed": "Сибирская",
      "category": "кошки/коты",
      "description": "Любит сидеть на окне и смотреть на улицу.",
      "image": "https://i.ytimg.com/vi/RGY68XE1uoo/hqdefault.jpg",
      "images": [
        "https://images.unsplash.com/photo-1618826411644-4152af83e48f?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1618826411644-4152af83e48f?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1618826411644-4152af83e48f?auto=format&fit=crop&w=400&q=80"
      ]
    },
    {
      "id": 6,
      "name": "Томас",
      "age": 4,
      "gender": "мальчик",
      "color": "серый",
      "breed": "Шотландская вислоухая",
      "category": "кошки/коты",
      "description": "Очень умный и сообразительный кот.",
      "image": "https://images.pexels.com/photos/320014/pexels-photo-320014.jpeg",
      "images": [
        "https://images.pexels.com/photos/320014/pexels-photo-320014.jpeg",
        "https://images.pexels.com/photos/320014/pexels-photo-320014.jpeg",
        "https://images.pexels.com/photos/320014/pexels-photo-320014.jpeg"
      ]
    },
    {
      "id": 7,
      "name": "Сима",
      "age": 0.5,
      "gender": "девочка",
      "color": "белый",
      "breed": "Персидская",
      "category": "котята/подростки",
      "description": "Маленькая и очень игривая.",
      "image": "https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg",
      "images": [
        "https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg",
        "https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg",
        "https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg"
      ]
    },
    {
      "id": 8,
      "name": "Граф",
      "age": 9,
      "ageCategory": "пожилой",
      "gender": "мальчик",
      "color": "чёрный",
      "breed": "Другая",
      "category": "кошки от 8 лет",
      "description": "Солидный кот с характером.",
      "image": "https://images.pexels.com/photos/20787/pexels-photo.jpg",
      "images": [
        "https://images.pexels.com/photos/20787/pexels-photo.jpg",
        "https://images.pexels.com/photos/20787/pexels-photo.jpg",
        "https://images.pexels.com/photos/20787/pexels-photo.jpg"
      ]
    },
    {
      "id": 9,
      "name": "Милка",
      "age": 2,
      "ageCategory": "подросток",
      "gender": "девочка",
      "color": "трёхцветный",
      "breed": "Сибирская",
      "category": "котята/подростки",
      "description": "Очень ласковая и мурлыкающая.",
      "image": "https://images.pexels.com/photos/730896/pexels-photo-730896.jpeg",
      "images": [
        "https://images.pexels.com/photos/730896/pexels-photo-730896.jpeg",
        "https://images.pexels.com/photos/730896/pexels-photo-730896.jpeg",
        "https://images.pexels.com/photos/730896/pexels-photo-730896.jpeg"
      ]
    },
    {
      "id": 10,
      "name": "Пушок",
      "age": 7,
      "ageCategory": "взрослый",
      "gender": "мальчик",
      "color": "серый",
      "breed": "Шотландская вислоухая",
      "category": "кошки/коты",
      "description": "Пушистый и очень мягкий.",
      "image": "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg",
      "images": [
        "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg",
        "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg",
        "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg"
      ]
    },
    {
      "id": 11,
      "name": "Злата",
      "age": 1,
      "ageCategory": "котёнок",
      "gender": "девочка",
      "color": "рыжий",
      "breed": "Персидская",
      "category": "котята/подростки",
      "description": "Обожает играть с игрушками.",
      "image": "https://images.unsplash.com/photo-1603311373659-fbb9e1e89b72?auto=format&fit=crop&w=400&q=80",
      "images": [
        "https://images.unsplash.com/photo-1603311373659-fbb9e1e89b72?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1603311373659-fbb9e1e89b72?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1603311373659-fbb9e1e89b72?auto=format&fit=crop&w=400&q=80"
      ]
    },
    {
      "id": 12,
      "name": "Лео",
      "age": 10,
      "gender": "мальчик",
      "color": "белый",
      "breed": "Другая",
      "category": "кошки от 8 лет",
      "description": "Очень спокойный и уравновешенный.",
      "image": "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?auto=format&fit=crop&w=400&q=80",
      "images": [
        "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?auto=format&fit=crop&w=400&q=80"
      ]
    },
    {
      "id": 13,
      "name": "Мотя",
      "age": 3,
      "gender": "мальчик",
      "color": "чёрный",
      "breed": "Сибирская",
      "category": "котята/подростки",
      "description": "Любит внимание и ласку.",
      "image": "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=400&q=80",
      "images": [
        "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=400&q=80"
      ]
    },
    {
      "id": 14,
      "name": "Соня",
      "age": 6,
      "gender": "девочка",
      "color": "трёхцветный",
      "breed": "Шотландская вислоухая",
      "category": "кошки/коты",
      "description": "Очень спокойная и любит спать.",
      "image": "https://ext.derpicdn.net/xZa9IRhJ6fCyWAixJLm7Ga797Mc/aHR0cDovLzMuYnAuYmxvZ3Nwb3QuY29tLy1ublZ6OUY5YkNVcy9ValRmYjVzZzdISS9BQUFBQUFBQVFpYy9Pb05iLVBwNXBuSS9zNjQwL2ZvdG9zLWRlLWdhdGl0by1jb24tb2pvcy1henVsZXMuanBn",
      "images": [
        "https://images.unsplash.com/photo-1583337130417-3346a1b2a5c0?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1583337130417-3346a1b2a5c0?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1583337130417-3346a1b2a5c0?auto=format&fit=crop&w=400&q=80"
      ]
    },
    {
      "id": 15,
      "name": "Тигра",
      "age": 2,
      "gender": "девочка",
      "color": "рыжий",
      "breed": "Персидская",
      "category": "котята/подростки",
      "description": "Очень активная и игривая. ",
      "image": "https://images.unsplash.com/photo-1618826411644-4152af83e48f?auto=format&fit=crop&w=400&q=80",
      "images": [
        "https://images.unsplash.com/photo-1618826411644-4152af83e48f?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1618826411644-4152af83e48f?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1618826411644-4152af83e48f?auto=format&fit=crop&w=400&q=80"
      ]
    },
    {
      "id": 16,
      "name": "Кузя",
      "age": 8,
      "gender": "мальчик",
      "color": "серый",
      "breed": "Другая",
      "category": "кошки от 8 лет",
      "description": "Любит поспать и поесть.",
      "image": "https://images.pexels.com/photos/320014/pexels-photo-320014.jpeg",
      "images": [
        "https://images.pexels.com/photos/320014/pexels-photo-320014.jpeg",
        "https://images.pexels.com/photos/320014/pexels-photo-320014.jpeg",
        "https://images.pexels.com/photos/320014/pexels-photo-320014.jpeg"
      ]
    },
    {
      "id": 17,
      "name": "Марта",
      "age": 4,
      "gender": "девочка",
      "color": "белый",
      "breed": "Сибирская",
      "category": "кошки/коты",
      "description": "Очень ласковая и добрая.",
      "image": "https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg",
      "images": [
        "https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg",
        "https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg",
        "https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg"
      ]
    },
    {
      "id": 18,
      "name": "Феликс",
      "age": 1,
      "gender": "мальчик",
      "color": "чёрный",
      "breed": "Шотландская вислоухая",
      "category": "котята/подростки",
      "description": "Любит играть с другими котятами.",
      "image": "https://images.pexels.com/photos/20787/pexels-photo.jpg",
      "images": [
        "https://images.pexels.com/photos/20787/pexels-photo.jpg",
        "https://images.pexels.com/photos/20787/pexels-photo.jpg",
        "https://images.pexels.com/photos/20787/pexels-photo.jpg"
      ]
    },
    {
      "id": 19,
      "name": "Белка",
      "age": 5,
      "gender": "девочка",
      "color": "трёхцветный",
      "breed": "Персидская",
      "category": "кошки/коты",
      "description": "Очень умная и спокойная.",
      "image": "https://images.pexels.com/photos/730896/pexels-photo-730896.jpeg",
      "images": [
        "https://images.pexels.com/photos/730896/pexels-photo-730896.jpeg",
        "https://images.pexels.com/photos/730896/pexels-photo-730896.jpeg",
        "https://images.pexels.com/photos/730896/pexels-photo-730896.jpeg"
      ]
    },
    {
      "id": 20,
      "name": "Шарик",
      "age": 11,
      "gender": "мальчик",
      "color": "рыжий",
      "breed": "Другая",
      "category": "кошки от 8 лет",
      "description": "Старейшина приюта, очень мудрый.",
      "image": "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg",
      "images": [
        "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg",
        "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg",
        "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg"
      ]
    }
  ]

export default cats;
