import React from 'react';
import './style.css';

function ArtistasConfirmados() {
  return (
    <>
              <h1 className="titulo" id="artistas">Artistas Confirmados!</h1>
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
            src="https://lh3.googleusercontent.com/e7KMxd3Ph8cf1KaCzndE_4FQbe_3UOPnLFtsduKUbMnB0tdeeIYXWUf_-NlmfuxURXHbqyGKIlvvzrpdl_3WhJ0Wz6MO2MWxsEF80kg-qU22-V0bM90e-v34mDkKSWkxrZ9FXencW57WrEE72kseF3N5HHiIqJXX2E8ZvZETwlmdqCLGF0VWlsRF3Wf-LgpNdXn4_Kbv0JVMOPRstJohbfoqXJeOzPtZ0xdy7Fqe2ZFY7LQiX5lER_xoQi8tKVGEr_9WL2Di_VQ6_883L-1HB76UZ_B8j6-ryYS0qUI77D6t00Tr71cnMHe4xoW2Z66vFmOy9W34KVUigH5_Vyj1e4HGD93qG0hQtpvRgQX-PAISqHA96qK0D4lKkjD-_aXvv2fFLuULTPCA-Wmqy5RvYqCHu0eeuvJCPvOGwjiB_TDzqtuycx0Dnlga6PXpMlrHZ9xojUmGh3VhNIRRAWYVEjQm5pPUm4UyyVsKvwqQ6tGII9lkVvEUDSLDpzFwRFBIUZnPbqkHbdVHMSPgZtbzcgQD-lJrZe-2awDTF1MyXCKUC5KO3ZD7S48ceVbe5agfFvnakC2_IZJjRmdSrTjq5QkPnQC7ffEcvYOfyi_dyVJ2cgHCp6Jxpr60kO2uEZaeKbbwkvO65QN61pX1Q1KAzZWtPwpLhV9AQ_lpMqLW-sK4d9LYhG0WQOa9fQzF7a6JcHF8uDbQIwO8aAVPgEfVgpY=w418-h627-no?authuser=0"
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
    </>
  );
}

export default ArtistasConfirmados;