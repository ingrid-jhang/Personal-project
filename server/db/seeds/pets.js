/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('pets').del()
  await knex('pets').insert([
    {
      id: 1,
      type_id: 1,
      breed: 'Domestic Short Hair',
      name: 'Queenie',
      age: 'Adult',
      gender: 'Female',
      color: 'Tabby',
      location: 'Napier',
      description:
        'Queenie is a sweet loving girl who just needs the extra love and patience to come out of her shell and trust the big wide world. Once you have gained her trust, she will have big conversations with you and give you lots of gentle love bites and smacks. She loves to play with her toys and chase the wand. If you think you have a caring, understanding and patient home then please apply below.',
      fee: 125,
      image: '#',
    },
    {
      id: 2,
      type_id: 1,
      breed: 'Domestic Short Hair',
      name: 'Charlie',
      age: 'Young',
      gender: 'Male',
      color: 'Ginger/White',
      location: 'Chrischurch',
      description:
        'Charlie is a gorgeous boy with a loving personality, he can be independent but also enjoys cuddles and attention. Charlie is used to having his siblings around him so he would be happy if there was another cat he can cuddle up too. Charlie can be a bit shy when first meeting him but once he knows you he is all smooches and loving.',
      fee: 125,
      image: '#',
    },
    {
      id: 3,
      type_id: 1,
      breed: 'Domestic Long Hair',
      name: 'Rosa',
      age: 'Adult',
      gender: 'Female',
      color: 'Tabby',
      location: 'Dunedin',
      description:
        'Hi all! My name is Rosa! I am slightly timid due to being in a new environment but am very quick to accept cuddles from new people. I have lived with children in the past so I have lots of patience and am very gentle. I will need to be an indoors cat since that is how I have lived for all my life. I will make a great companion for a family.',
      fee: 125,
      image: '#',
    },
    {
      id: 4,
      type_id: 2,
      breed: 'Mixed Breed',
      name: 'Brandy',
      age: 'Adult',
      gender: 'Female',
      color: 'Brindle/White',
      location: 'Timaru',
      description: `I love everybody and I'm full of energy!! Eager to please - teaching me to learn new tricks and all that I need to know will be a breeze for an experienced owner. I'm wanting a family to have fun and exercise with - so if you are the energetic type, have plenty of time for me, then apply online now so we can arrange a meet and greet!`,
      fee: 250,
      image: '#',
    },
    {
      id: 5,
      type_id: 2,
      breed: 'Mixed Breed',
      name: 'Rafi',
      age: 'Young',
      gender: 'Male',
      color: ' White/Tan',
      location: 'Wellington',
      description: `Hi there, my name is Rafi and I am looking for my forever home. A home that has the time and patience to help build me confidence. I would love a home with someone around for parts this is to help me settle into my new home and help establish a healthy routine. I don't have the best manners around other dogs so I would love a home as the only dog. If you think you are the home for me click apply to see if we are a match.`,
      fee: 250,
      image: '#',
    },
    {
      id: 6,
      type_id: 2,
      breed: 'Mixed Breed',
      name: 'Lucy',
      age: 'Adult',
      gender: 'Female',
      color: 'Black/White',
      location: 'Napier',
      description: `Hi My name is Lucy, I am a happy girl with some basic manners but would need a family who can continue my training so I can grow to be a well mannered dog. One of my favourite activities is to run around, fetch and play, especially with my human friends! and I am learning how to walk well on a lead which is super fun because I get lots of treats for being good! I enjoy cuddling up and spending quality time with the people I love.  If you think I could be the one for you, please apply online so you can meet me!`,
      fee: 250,
      image: '#',
    },
    {
      id: 7,
      type_id: 1,
      breed: 'Domestic Short Hair',
      name: 'Clover',
      age: 'Young',
      gender: 'Male',
      color: 'Tabby',
      location: 'Auckland',
      description: `Clover is a talkative tabby with an awesome cattitude. He is an affectionate and outgoing chap that just loves human attention and pats. If you are looking for an outgoing friendly feline then Clover is the cat for you. Click the "apply to adopt" button to give this handsome boy his happy ever after.`,
      fee: 125,
      image: '#',
    },
  ])
}
