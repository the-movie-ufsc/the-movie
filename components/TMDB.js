const API_KEY = "d74c41bf1ea14b0250b3c428bc2c31c2";
const API_BASE = "https://api.themoviedb.org/3";

const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
};

export default {
  getHomeList: async () => {
    return [
      {
        slug: "trending",
        title: "Recomendados",
        items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`),
      },
      {
        slug: "originals",
        title: "Em alta",
        items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`),
      },
      {
        slug: "action",
        title: "Ação",
        items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`),
      },
      {
        slug: "comedy",
        title: "Comédia",
        items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`),
      },
      {
        slug: "documentary",
        title: "Documentários",
        items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`),
      },
    ];
  },

  getMovieList: async () => {
    return [
      {
        slug: "originals",
        title: "Em alta",
        items: await basicFetch(`/discover/movie?with_network=213&language=pt-BR&api_key=${API_KEY}`),
      },
      {
        slug: "action",
        title: "Ação",
        items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`),
      },
      {
        slug: "comedy",
        title: "Comédia",
        items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`),
      },
      {
        slug: "documentary",
        title: "Documentários",
        items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`),
      },
    ];
  },

  getMovieInfo: async (id, type) => {
    let info = {};

    if (id) {
      switch (type) {
        case "movie":
          info = await basicFetch(`/movie/${id}?language=pt-BR&api_key=${API_KEY}`);
          break;
        case "tv":
          info = await basicFetch(`/tv/${id}?language=pt-BR&api_key=${API_KEY}`);
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
              items: await basicFetch(`/movie/${id}/similar?language=pt-BR&api_key=${API_KEY}`),
            },
          ];
          break;
        case "tv":
          info = [
            {
              slug: "similar",
              title: "Similares",
              items: await basicFetch(`/tv/${id}/similar?language=pt-BR&api_key=${API_KEY}`),
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
      info = await basicFetch(`/tv/${id}/season/${season}?language=pt-BR&api_key=${API_KEY}`);
    }

    return info;
  },
};
