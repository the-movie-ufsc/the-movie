const API_KEY = "d74c41bf1ea14b0250b3c428bc2c31c2";
const API_BASE = "https://api.themoviedb.org/3";

const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
};

const userList = [
  {
    "adult": false,
    "backdrop_path": "/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg",
    "genre_ids": [
      28,
      12,
      878
    ],
    "id": 634649,
    "original_language": "en",
    "original_title": "Spider-Man: No Way Home",
    "overview": "Peter Parker é desmascarado e não consegue mais separar sua vida normal dos grandes riscos de ser um super-herói. Quando ele pede ajuda ao Doutor Estranho, os riscos se tornam ainda mais perigosos, e o forçam a descobrir o que realmente significa ser o Homem-Aranha.",
    "poster_path": "/fVzXp3NwovUlLe7fvoRynCmBPNc.jpg",
    "release_date": "2021-12-15",
    "title": "Homem-Aranha: Sem Volta Para Casa",
    "video": false,
    "vote_average": 8.3,
    "vote_count": 9671,
    "popularity": 11578.615,
    "media_type": "movie"
  }
];

export default {
  getHomeList: async () => {
    return [
      {
        slug: "trending",
        title: "Recomendados",
        items: await basicFetch(
          `/trending/all/week?language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "originals",
        title: "Em alta",
        items: await basicFetch(
          `/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "action",
        title: "Ação",
        items: await basicFetch(
          `/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "comedy",
        title: "Comédia",
        items: await basicFetch(
          `/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "documentary",
        title: "Documentários",
        items: await basicFetch(
          `/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`
        ),
      },
    ];
  },

  getMovieList: async () => {
    return [
      {
        slug: "originals",
        title: "Em alta",
        items: await basicFetch(
          `/discover/movie?with_network=213&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "action",
        title: "Ação",
        items: await basicFetch(
          `/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "comedy",
        title: "Comédia",
        items: await basicFetch(
          `/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "documentary",
        title: "Documentários",
        items: await basicFetch(
          `/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`
        ),
      },
    ];
  },

  getSerieList: async () => {
    return [
      {
        slug: "originals",
        title: "Em alta",
        items: await basicFetch(
          `/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "sci-fi",
        title: "Ficção científica",
        items: await basicFetch(
          `/discover/tv?with_genres=10765&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "comedy",
        title: "Comédia",
        items: await basicFetch(
          `/discover/tv?with_genres=35&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "documentary",
        title: "Documentários",
        items: await basicFetch(
          `/discover/tv?with_genres=99&language=pt-BR&api_key=${API_KEY}`
        ),
      },
    ];
  },

  addUserList: async (id, type) => {
    let item = {};
    var count = 0

    while (count < 1) {
      for (let movie in userList) {
        var content = userList[movie].id
        if (id === `${content}`) {++count}
        }
      break
    }

    if (count === 0) {
      if (id) {
        switch (type) {
          case "movie":
            item = await basicFetch(`/movie/${id}?language=pt-BR&api_key=${API_KEY}`);
            break;
          case "tv":
            item = await basicFetch(`/tv/${id}?language=pt-BR&api_key=${API_KEY}`);
            break;
          default:
            item = null;
            break;
        }
      }
      userList.unshift(item)
    }},

  getUserList: async () => {
    return [
      {
        slug: "originals",
        title: "Em alta",
        items: {  
              "page": 1,
              "results": userList},
      },
    ];
  },

  getMovieInfo: async (id, type) => {
    let info = {};

    if (id) {
      switch (type) {
        case "movie":
          info = await basicFetch(
            `/movie/${id}?language=pt-BR&api_key=${API_KEY}`
          );
          break;
        case "tv":
          info = await basicFetch(
            `/tv/${id}?language=pt-BR&api_key=${API_KEY}`
          );
          break;
        default:
          info = null;
          break;
      }
    }

    return info;
  },

  getSimilar: async (id, type) => {
    let info = [];

    if (id) {
      switch (type) {
        case "movie":
          info = [
            {
              slug: "similar",
              title: "Similares",
              items: await basicFetch(
                `/movie/${id}/similar?language=pt-BR&api_key=${API_KEY}`
              ),
            },
          ];
          break;
        case "tv":
          info = [
            {
              slug: "similar",
              title: "Similares",
              items: await basicFetch(
                `/tv/${id}/similar?language=pt-BR&api_key=${API_KEY}`
              ),
            },
          ];
          break;
        default:
          info = null;
          break;
      }
    }
    return info;
  },

  getEpisodes: async (id, season) => {
    let info = {};

    if (id && season) {
      info = await basicFetch(
        `/tv/${id}/season/${season}?language=pt-BR&api_key=${API_KEY}`
      );
    }

    return info;
  },

  getSearch: async (query) => {
    return await basicFetch(
      `/search/multi?query=${query}&language=pt-BR&api_key=${API_KEY}`
    );
  },
};
