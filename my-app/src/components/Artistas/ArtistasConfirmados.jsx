import React from "react";
import "./style.css";


 let fotosArtistas = [
   "https://lh3.googleusercontent.com/AX-C1ZJo76NSXtQRgxyhJx0TwQ2S1o_uVdK7AY-dmj4xDxBKahuZxdzRDVI-gzx4RsFMEmC1Um_5zKfyG_PpZl5IVe5LZOQH-2RG_KvrrK4TqMrYv1Dk-QSm1c1Y6PQ8beIVnR8ngstoGglCoptsvkaEkdKahIvr7LsCS7RCMilbM2Ntp6tBMiCKj6kgsLWS7513PKffyoh7Z1MKyWTeoD9qdG4r8xwNCz9sA7OVcY6bd459TH4eBwhArRYa4nM6v1_1zx4Ntq3eRLhlmoF8UAVpOaY9zPnmFNEno5DjmEu5GV6bNZnC-iRDrReytbDyhgF02R7rSSlV7MgXM3v9jbCeG5FiPLsf2SlOZCjAiYVHEAwFr12oYcpCkQyqrv6kWsblvX19Og7qtQZUvPAsdrvDN_rJUmXNsXUwGdWZA7SCczmAW2zVY5oqZCuE42qwjUvn4-5nne36QlMC1e6tdTa8Itc9EgMa0VIb5bduR8U2QUxD33003IugMusq82ejG3eDEfoTkhRY59FFm4MOIAlxLfjUXFKkp9krCnDIOr0RjTwQWU32r_HxrWePTF1XD7NE3vw3xbFXy4oqdPizla9c4xGmFBtMoOwQtl_SwX-4N22AZ-w3OTOSQPs9fagyBGqUcmSdRqaKmPe283GneEWEEhn0kvGRultzHSoZqDYdCQAABDjc8sYbZMetr6MuB0UJ8VFb4FjEuiQB80wo837T=w418-h627-no?authuser=0",
   "https://lh3.googleusercontent.com/FUIonC_bTpD7zOJGM8lfIcsM-d311cuNh4-nZSBK8ysCuh-D0Gd2mpEwo4zmWRmn8-xFr3MeHYibNzL8W8AzRSl0Zj57nI1JKsLlDkm9ANZZhyh4RFN8AhPXGAhWp_fiIiYxg3GEaYFzvNvx-xjRpwOs66JoOOxE1rQpdaK9IEWZ5DL3Xa8WvxMMNcjkmsxoL8LlANp9O4Z4rSTud09dY6YYPChpZvQOdm3yg_9AkNTzL9uyPjulmTSSoCdISTKz1DcFRj0QZUDMDeC5--LmkrezpudwN5sxYMOj9aE7ejhttuY39VqOCrJjB64iQftXW2N1ojUVamZkxC8aVlgNDw3E8waqyfVAfoZgxM-Mij1rsXQKzyf7H4mCC9Er79CG0JPb2mNPKhne5N2X0G94wLHCkhjcrXWv1w-q0mxkLHF_q8zKbCcKP9E77T9TyFIMfx5kzfrg8MsTnYlLl6PxR6zQ-2SBPAf6fAo1LiXwL83xFdEDeBgnsnmyQYvJIkxBJo4TCUjNGAHBaLr-dvvjygS18gM7lsJIjKxlUURAXIhaQhxd_LGtDrqzYHPTrIulU-bCA6vPBE0YMEOdIi1-0Q2NTHlpHL19Vbw-42sLZf_9tlaTMSjwiU0SrVuOuB8uanWlGNLNSV8a6P0pep9RXAzSPHeN-ZU8wZCW0SRNtk93nJlempx_6-Ds9XDpQn1jGovgGVsAOaqJBkzfoFM-0Hom=w418-h627-no?authuser=0",
   "https://lh3.googleusercontent.com/MFm15lYYS__ZLGXd2xOGdTSkck_weev-i6GAKp7xmSSQB3cgFv--sSSwDrN0GUgfKu5A412dHfNthUbRZ_I8isL_TOkztExHJaG0HJhmQj8gHdDqo6PI1rhuK64eN3EZPeQ890JL-Hq_W12EL_FOLDKKLwQuQr5bQDLOSLQe_W97kqBTsLsdO_KMx5X-k0qqqCGhgX4x4bcIW5yZwZWKDNUAeNG_KN4JpucA3XEi0iHGoLJ-NBHZOV7RuHGaDkjD8KmoPMigdop9KKMUA3pd9hSJhl1ZjPaQ2IkXHaEv52ZZWEpg6_tuN_r262hw7Y_VrhV-ROridtlsVI0bJLE6oeArpNCky7SkEucTAlR10_QlbVrly352GT-uosNwBdbD8YihagRUXaXMkBw1UBanpxv4iCf1WcBxCaCljyh4J4k-P_60kPj4wL6mvpFX_hT59m3YaIq6orwn4F4K3v5X3peb1TrZRdHIqB7r9JSnS_1TMPNsNEFsynod4quxPXzwUAZ_rZH_53-uELl5QyIE5Y8KDZv4r8xkKHJgcsgjPYPxB8WkF2ycjmVckyy7nnwn5q0obt3N2sChY27jkwAVc3C9UXRec0OzrZgdcsvdqYgpuCSPW21n1F2PY0BxH2LJ7-QZcjoB_3OTLVqoToFBTk3k00el5iyB39XU78Au1L7-_jm8a_NcAgejKq3ug1TW4R4s0tEw--wOoUDXPAT9o411=w418-h627-no?authuser=0",
   "https://lh3.googleusercontent.com/X6nkZpz3mc6KruNQo06nysN2Rltv8b8LdGfCY2N1pfAz1tG5WwcT7pzMpF9NaADqO9vM5zqDWXsWANU4_e3jJwe__MFJfTCXBc9iG77_YAcAvy2gA60l2YPK3pBR1r0neUvDxzdl1gOQNrdwfMeuUSAckCZ2QdggtUdULVj2wZF153ZNFdLOubGKhv5B6Qv5esl_nShzmUq20FXQT83fAOX8n5uwWV6ltb3Ix_4u8DpHwlfcp3De3Kv6k5ghKuqGGvECJLgTJmll9Qc2fGsQzcdHYZYwo_9YqufS8NV3c71Y7WY7TrohG3cAumf5rhFgY8kuBe0ca871z3l27u0-lBtaOpllTkgEO6wzZIqXZ6GqdhWRBEdlNIhAqX-De6GCJM4M9SVUqVcUT2ITdFXC0kLO90_eADyvlC2Q2uZnDNP6XaIkho3NiN_hob8zdxOcIx5AU-fizMzUSFD4IIIWwWHwtafAzMp8HO1EmbzWLTLfV3LB9Ee-Xp3udB996NT_XUqO66C9Xgu_bN29rhtfzOzOidtu93tdjF0dZnmxm1RDVDN9tIYVBhcmqNJ5r9TxT0fj_JKPJx3nFV3NbMU2iH5Q6diteWuQ-4GJOR7LzzM6aey6rvJ2NSlmsbMT08xkxMFUbbRfHVtkQUTzSsc5DAJR2AHCZHZ9AkdzM7eWF780BAiEZ-PKQYDzKZxx3ESnNXYYV1mkbqli1kMtb80ATXCo=w418-h627-no?authuser=0",
 ];

function ArtistasConfirmados() {
  return (
    <section>
      <h1 className="titulo" id="artistas">
        Artistas Confirmados!
      </h1>
      <div className="ArtistasConfirmados_imagens">
        <a href="https://www.instagram.com/gildovigor/" target="_blank">
          <img
            src={fotosArtistas[0]}
            alt="Gil do Vigor"
            width="95%"
            id="gil-vigor"
          />
        </a>
        <a href="https://www.instagram.com/pefabiodemelo/" target="_blank">
          <img
            src={fotosArtistas[1]}
            alt="Padre Fábio de Mello"
            width="95%"
            id="fabio-melo"
          />
        </a>
        <a href="https://www.instagram.com/therock/?hl=pt-br" target="_blank">
          <img
            src={fotosArtistas[2]}
            alt="Dwayne The Rock Johnson"
            width="95%"
            id="the-rock"
          />
        </a>
        <a href="https://www.instagram.com/ivetesangalo/" target="_blank">
          <img
            src={fotosArtistas[3]}
            alt="Ivete Sangalo"
            width="95%"
            id="ivete-sangalo"
          />
        </a>
      </div>
    </section>
  );
}

export default ArtistasConfirmados;
