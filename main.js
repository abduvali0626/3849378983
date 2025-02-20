let mevalar = [
  {
    url: "https://avatars.mds.yandex.net/i?id=f2fcbe6fce9d9160ef9ee431b373c1f3_l-5273391-images-thumbs&n=13",
  },
  {
    url: "https://avatars.mds.yandex.net/i?id=5972c59c60923f93dbc41dd0fbe47581f8ee9326-12421548-images-thumbs&n=13",
  },
  {
    url: "https://avatars.mds.yandex.net/i?id=3572523d286994cd5c6f812a1addc561_l-8311862-images-thumbs&n=13",
  },
  {
    url: "https://avatars.mds.yandex.net/i?id=2f48abeeecced288204a3cbbbc59e4d2_l-5315199-images-thumbs&n=13",
  },
  {
    url: "https://avatars.mds.yandex.net/i?id=84b28d2dfe466a4e3bed8e0ece0d44bb_l-5428917-images-thumbs&n=13",
  },
  {
    url: "https://avatars.mds.yandex.net/i?id=239c782cfdeca3eb6262d85f923ac269_sr-4269827-images-thumbs&n=13",
  },
  {
    url: "https://avatars.mds.yandex.net/i?id=df29456c8662a56534fe90ceaf66252f_l-5869156-images-thumbs&n=13",
  },
  {
    url: "https://steamuserimages-a.akamaihd.net/ugc/2056503724354495370/2EDDA6D11233FC3A4DC95E2977B4CA1D93500958/",
  },
  {
    url: "https://avatars.mds.yandex.net/i?id=5c045ab34c66006d3f7b3cc9f4ee6b14_l-4303506-images-thumbs&n=13",
  },
  {
    url: "https://avatars.mds.yandex.net/i?id=2a0000017a06e4129b3c4b05f262ef273197-4121129-images-thumbs&n=13",
  },
];

function tugma() {
  let box = document.getElementById("box");
  let image = document.getElementById("image");
  let tahminiyIndex = Math.floor(Math.random() * 6);

  image.src = mevalar[tahminiyIndex].url;
  box.textContent = mevalar[tahminiyIndex].ism;
  box.style.backgroundColor = mevalar[tahminiyIndex].rang;
}
