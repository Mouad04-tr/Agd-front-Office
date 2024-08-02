export const agencesParVille: { [key: string]: string[] } = {
    Casablanca: ["Casa Izdihar", "Agence El Warda", "Agence Al Mostakbal"],
    Rabat: ["Agence IBN SINA", "Agence Alexandrie", "Diour Jamaa"],
    Marrakech: ["Quartier AZLI", "Gueliz-Targa", "Agence Ennakhile"]
  };

export const agencesCoordonnees: { [key: string]: { lat: number, lng: number, code: string} } = {
    "Casablanca": { lat: 33.5724032, lng: -7.669395, code: "7cd4778aa113b%3A0xb06c1d84f310fd3"},
    "Casa Izdihar": { lat: 33.560719, lng: -7.635484, code: "7d29b75a2242d%3A0x81f7eaad9c703e5b"},
    "Agence El Warda": { lat: 33.563665, lng: -7.656609, code: "7cb671e8a41ef%3A0x9865e13a01f47df1" },
    "Agence Al Mostakbal": { lat: 33.525410, lng: -7.653222, code: "62d61bea65b4b%3A0xbd8cc5e8a0ce995c" },

    "Rabat": { lat: 33.9693338, lng: -6.9396652, code: "76b871f50c5c1%3A0x7ac946ed7408076b" },
    "Agence IBN SINA": { lat: 34.006146, lng: -6.837380, code: "76c90f1638ceb%3A0x284847f22e6b156a" },
    "Agence Alexandrie": { lat: 34.008727, lng: -6.829268, code: "76c77ad0849b5%3A0x6feaa775f3743b37" },
    "Diour Jamaa": { lat: 33.994903, lng: -6.838246, code: "76b920537ca49%3A0x4cb86dd68c963c3c" },

    "Marrakech": { lat: 31.6364786, lng: -8.0894426, code: "fee8d96179e51%3A0x5950b6534f87adb8" },
    "Quartier AZLI": { lat: 31.625077, lng: -7.988007, code: "fe91f52e91eb1%3A0x6d2e421e98e637e8" },
    "Gueliz-Targa": { lat: 31.635242, lng: -8.027689, code: "fee90a9af344f%3A0x5bb52765640dbd23" },
    "Agence Ennakhile": { lat: 31.6358332, lng: -8.0319694, code: "fef000952abf9%3A0x78b234e85a902e4d" }
};

export const updateMap = (ville: string, agence: string) => {
    if (ville && agencesCoordonnees[ville]) {
      if( agence && agencesCoordonnees[agence]){
        var { lat, lng, code} = agencesCoordonnees[agence];
      } else {
        var { lat, lng, code} = agencesCoordonnees[ville];
      }
      const iframe = document.getElementById('google-map') as HTMLIFrameElement;
      
      const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106376.56000682975!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda${code}!2s${agence}!5e0!3m2!1sfr!2sma!4v1714127576978!5m2!1sfr!2sma`;
      iframe.src = mapSrc;      
    }                                                                                     
};





