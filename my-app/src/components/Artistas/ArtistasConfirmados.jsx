import React from "react";
import "./style.css";

function ArtistasConfirmados() {
  return (
    <section>
      <h1 className="titulo" id="artistas">
        Artistas Confirmados!
      </h1>
      <div className="ArtistasConfirmados_imagens">
        <a href="https://www.instagram.com/gildovigor/" target="_blank">
          <img
            src="https://lh3.googleusercontent.com/rQYcUGYKWlJw1HR4gUnz2RvNKHd6KefkR5M3BcoDuJRuxN4uA09Jn2Ew_t4XamJRHHF0P3h7J_yHjSL2aUhRQrsiG15qPeQKtLRSApxC772mQofQfpGp1kYnX_kxFI1m9vTBao7IOLGbMRDQcvozfgtEiz0qkJPxXFSii5_i2PHdBVRERp4exVQ88D9Xb_SmjrQrM0PWHjACbr0jLU863zvkdK-Mo7OBjbNY326-u9mUmkSO6I_b7wChdifLGdt_dsQSQWkqaHqG-WhbI8mvUtR_f7pCiUixndypOlz2vUMT2WIJTZldcqoxd9UBGJLUr8Yem16Pef5AJzSpGgl2q_WKmiTn60bgYHiF0CKhSZ6PKm6DmJwAdPKfVoZcE48jrlKgnHe4aXt1ggQwMbjng9t1w5FynNVkQn51pzVZvDWtCW6VPH8CHYLhOdBVL33YLyX5obo2RKqlaccQz_GWKaJ-32DKSb8cWU24dnXGWLgVHSzZliX6wrINNVmvqYkO7eO4wldPykzOl3rxrCdy8BGNSUtv6uLoYSQPVLizX498JAhzSN6O904nXonVuGY_Rgk4XTw-nQ3ZkkTVp6qpZGU7HAWVYSBnZnmrbXC7anBjIJvcb61YA04620lEyoi63nKFsQE_7yqqgX7il80dxJlWoTJglHF22uMLdtcytZL-DtppdzfBkmO506R-CeDP7X8Cekw7ijYERFyg7pM-qps=w418-h627-no?authuser=0"
            alt="Gil do Vigor"
            width="95%"
            id="gil-vigor"
          />
        </a>
        <a href="https://www.instagram.com/pefabiodemelo/" target="_blank">
          <img
            src="https://lh3.googleusercontent.com/2XNF5GSdrejIGvWHzwj_Az_aIZ3GiCShfSKi-dcqDTb_oqmwGUVqtuwKMmUIbeOoeqGVdxYh3see8C_xucY6NKhuA-VTqBEIzLzp-i9zbwRj8C9pO-x8xbLOIJb2EGeTXtJYiN1IxJAda1nVc3MsfZ0CK3nB53MXbP-Qfidah7wXKgse06fbnXzQrulUpY4LlangVo91ELITk-q3uJqomoJTXZeRQhwPXdsQPh14KyLEExgBLjR1OGmBCb1_VXw1ET66xbzqDY-7Uk4gmWNlXGm2v9BzGBuHH25AU-4elt5ZZYN-bSYjQkI3EBzTxwqAPc81_QluShCEL0KpidG-fYN-1dtivAs0Yhv7K3d03OqGp7DXVVNCWElOUM7wr2nCIL96NI_xb1U4Sj4ZBZjdcx2d-xBAnk4b0yjNt2mjyPfrhF5lwbrcE5_ejGxQpgev6oEHYA52SysIKmImo3kzzzo82SaGuaBpIuDwrB_pPzWTTodOGXRkPHKRuuK5wTZSf4-CZwG9Qlt6glBcZ7VB1Er8PIpU09y0VCnttYBjDCCvk5wI8sMkidytZjOBaHKP_B_7WfBYoFz8YkJgVB_KiLYiEv7w-YPVQsEUT8hZTa42uW0v0cxeh09TbMHYxW3qweeJxV_U1wR7XlTCiOWYJeB8UOiaMQk7TjsnF0d9wUAeLpELzaHd1LBWnCUreiNHUFaq1uiW0vBtvM9F9_f5Y5g=w418-h627-no?authuser=0"
            alt="Padre Fábio de Mello"
            width="95%"
            id="fabio-melo"
          />
        </a>
        <a href="https://www.instagram.com/therock/?hl=pt-br" target="_blank">
          <img
            src="https://lh3.googleusercontent.com/i_moPOzONoHj0fynZCdWePcIhA3evJRnkwwRjYg-WaZV604xd2zxiXR0suvVxP20F8B1mIzU4Ixk7akTTSf8cPosSnbqCbrRG0DKutgHR6mEbeq_ahkdVO3-3KwAM4Pz6M9dOQkh4W9iwLcFqh4pwqAs_-WYIeB1s16wX-z3EIKjuSptvsaskr1DOSEckz7NK4wv7I4He9IoO6keHIpSQ61UdAWQpVxVmIRIOQZ2IIIWr_0YmOiN2jB7EN7i6did83wVwRum0Mrk5JDOzo6_qKDx9GhQYsi2qFcgO79zDL92id2WQnL-3OCmWGrEruffDW11FNUWK1fO8hz7W1pjCG0VFaEOfg83OK3MmdZzLk0n5yGH-hYbthdG7O3trTvWuQjvHfqTAisClZkOOCaPb1WjDYSSCmjZ60dAAk-lQ26W180DqjP_9euxYSHG8XAe7NtAJthG6K8rDhASYctTeH5gKF2oxgHYDGYPV_wKjiqBnbMMWx4KdN8Yf2Mf3sGxJxEfQ3iOi6L1sipOl7mlKHn4VoLbxU9m6wruCLbceuLG8kHTcTeRpE3alVgnP8Pc9wR3vRlog7wDoaEjA6cH-LnoMAk8lsxPoqt3rMXfwtXIwrzX6bu8eRZ1fSEc3RfapNSbxnJCl1eATBYJhr3HVBI-BZZUigdZhv2tlNK6IiGeJHtuGFMUTpb4YkX4TZ53MxTiBqdO8zfaE51-OXsS1mk=w418-h627-no?authuser=0"
            alt="Dwayne The Rock Johnson"
            width="95%"
            id="the-rock"
          />
        </a>
        <a href="https://www.instagram.com/ivetesangalo/" target="_blank">
          <img
            src="https://lh3.googleusercontent.com/1qojvd4UOapa8roNll8Sa7eDoP1cPq6YchCxW9e2z8FUVralqe_tCtXfwUO2MB1ZwPsmY3qr1pUCBGbM38WWz01Mk2UuuwPsSKny3-xifiMAlRRxA47rAU9qaisqq5qxzbndlt0KCjCbCJNuHjslmiBDb4-7e8vZ-0nmc5-K_C04DKR-OWV8pdFnT51hh1ksPwVn3Uz1lz7qvSBZmf8e6dLys6zjBJqbAlIFr89y8jDIPZYt8Tuiz7XVBbqkTEn7M8-7G6w3_7XrZ4J5n7sx9-maG2m7VHlrF8Q0JDj3JaTEWTm9OUTQpOacqTQQ-WdGrBc9khRvbNIQaBnhG1x9zaeBcDlrOYTIDgAWhFBDcijNPA2nRl36EsLfjK2Ch1zxyjMnS3gCBxmUGfB3NypyywaIlthyzzFs_RTWXN-ire5xZtUnWyzZS1CStYhTHm0IpJ4yBzMTZTPDdSiCl0sSVfXgHtl15xpNjPzPduvOe4_k1FbHItlfBW41FZMcs1JkMAizyZEB1rwQm0e1f8P-RX40oPfB3W16z_uZuyyXJspSjP6dhFFYuYneZj5oTjUpvs2pJSCKmyDKzgDTKlfgaA0wj4i6S2-Yrw_n-31tLeM5_Q656MT98FiPMvGWxgBLP9FLL8LGj-pbCA6L54G9bVA3jPZaM2-1LUhbhFstj0_q4wnTyg9nuVGkZ2cikN_UrYUORGHdXUSSgJF9_iHlxEI=w418-h627-no?authuser=0"
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
