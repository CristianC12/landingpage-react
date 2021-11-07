import React from "react";
import './style.css';

function Carrossel() {
  return (
    <>
      <h1 className="titulo" id="galeria">
        A maior festa popular do Brasil!
      </h1>
      <h2 className="subtitulo">
        Desde 1988, espalhar a alegria é a nossa tradição!
      </h2>
      <div className="carrossel">
        <div className="container_Carrossel" id="img">
          <picture>
            <source
              media="(max-width: 999px)"
              srcset="https://lh3.googleusercontent.com/bZYgIpgcBW1Vu_-luraatsE7Omj1uIt9bBA0jMgThzl7sOZ6RbHeiRM-FL2iHR89QC-MH1B8l4A0ygkweohJ2Z-cIRxUTSUCGhLWgfXFdsROS0YVt6xF7d9n2uCdQlcN3xfZE0iES8osHhhW0tsPYiK9OrsIjmFzWE6tYTaLcpk4NZT2mjyhUcuNzB9pn7Ob0j4srdoiZECI3baYmPHqqX0OvAKea6h3F6BmGkbPrQ47D3EBoby5zNdpFzya6SbZBtFJ2Z71096BRztKWGJbsygs810eZ5X_PnVgWU6CuclROYp-gOr2fsTmLoKTw-0lOKtOpRQe_h8iy4PN3xnJOxgxBlVQvKcpzEn5LlAXGu0i56cJ3Oieny00R2NFRr5YorE70ZQTwKFHvGteauC6UdsflaJB7wV713UtW1ufQuO751Kof5vXyTo_a0KOHq3agYwxqeGcVL6TKX2oRn0nogmTDbQkMXPg1luLqJz4RTJN1Xt5xKhCrozi-fh5DP_-HFq60lAqV0cb5YQ2oc2R3Dx1qZxwM3THz_rKkmTlUg5Wqd0oXZqQYAPCXzHjY-xunrG_Gne8NhLyzguVk7vX3mlSK6N26QrXGipyqC3wc7A7okEXUSJgVg36pIhzDQ84SFgGwcd-BT0rbBEWM_jcm-vRaE_sUhe--POjQK3wZx97gKhpehyQFTPOWttzOztUBdBT1FU9ZAtYoOlIp1oay7I=w353-h627-no?authuser=0"
            />
            <img
              src="https://lh3.googleusercontent.com/r1DjvT3XIZZ6AlH6_VDJGg0Io6o1eXbHkfPVgebxLeoQ2Rb1CTNZ1ahnvJTxCbUBJpgB95k8dEBuh_BvNdWYE_t-LJWK8uoX7odgDU6nI5bJYBrNQV1NgAoMj6OeUVOoGiiw8Wze4-fzJhHMag3iIAGGiTP34QQo4JayTezPZuIJr4ky7S3sGuDRHZcqQT6amj-K_1E-7bK9QKi8dF0y71eIfS3kmZrjhM4mYYhHyejtv-aMG2vQPk0soT4-Q6FWR1pbaQ-CkrT0B4cXqPHHGoaomaURGUhuXTEYZA0LAfofbmUXui4PdgPQq36UIZkD08dNX8wDEPKKRhPPecYUHRGBm7idvredaN_2u-BLbmgy2DErmIrapeHJBIHvCiNldgEuzUCRaDRajCSIAGluAkhDAgrkzpjyJOsHN2iufX-090Go_guRGeWNfejXK7ClWhGZprfVg_3mjanmMOu-0QSvnW6U6pc_bWECwgcJM_HsHYTFnwinpXxDcvIiMEOdVMU9NQQSZYkljBOYdpPZxv8yQjURj5aN9t1sZ2K0T1IrLZnuGwhuVNPVnNgpPE1DWyNSvnCFHOGydJSLTau-altnW48ifqQ0jBFfCDHzhv8o3l4no-OXBQyVchSfHRpMS8PH6QQQZdraI3DOcOcweCV6qdJ9_hxENv4Rpj6pPxtMTDiS-Eb0IV5QD3pODo4j7ndBXK9suOpmuDD-eizCNWM=w1115-h627-no?authuser=0"
              alt="canecas de chopp brindando"
            />
          </picture>
          <picture>
            <source
              media="(max-width: 999px)"
              srcset="https://lh3.googleusercontent.com/jA6QN1mJfLlOces4xwQvYK_5Yyv56WP_n501FEq9_7IDZT8ufkoz_mqxjjTFR5IqN5Qtt0AZ6aqUkxlwZjNGX6mMYGimrsJPUKg2AqhOkI68A_ucqVDi88fLqWimve8vv1fpDnDITgVPw_F3pUTYWE6nXSBwsQlLy_dL9OeJbotWbMQV6-GwurlmdTQusNLjMq70Aw5EOucKrThTE4llt62K4gcvKiYQgh8ZYAvXrIenswKVMG4RDvZIL91Mn0yHtGGXOOgcx11X2suCYoNxSeup3xo1ep4p4-GmA4KMSwIwulHwN0pSnbCOzQBuuIWd4HQ1XiFfwUCsAU0sneMxM-AknIJRunC8VYcehbZjckwUiAArabQYW38PIUMvwij32gAOB1gztkCc9AU8ZPXqNC_1chNSpXEsn1XF-9ak8QXk3RRqLuVwuSs6x4_pR2Ay2Gk8CHbIwFCwj-Li-CdVX00iW8O-BujT0N0SGSzvBv8tD6ALUUC7Hqwahl3cHoTWTCUFdbgX6WrwskfGPGOVxqycj-v_c9YkRk9qEw0caVNZtu3WjxkGO_UDGsuE-ulbndWbFlqHWaNMmo2xQRFP-5mQm_ht-3-J3LJJ8kz5lEBDpjVE5Qk3udB3Xwd7EdmdOwHCgTJWMeM0lb-NAZT5UNI2nsA0c7SfDoCOpdXEfmxa_ZZj60yLCvr894daai3u6nx_2u884rUATk_wNluFO9U=w353-h627-no?authuser=0"
            />
            <img
              src="https://lh3.googleusercontent.com/9FKh67ysC9FKW9UmPa9iCEfcdtkTduFY6cKfWbkhq3kxBp1wthvzZG16phLQVjEdbHxIkaPP5xIGLGtd5e_G_Gc17RkQIlgqEVMTk2yK2P9syR7j8f89-7iOH2av_xNMMZdsRcgu4XZCTBoBAKft0ET-0hbm3qJpq2QbLP8jXu3CLAH6iwcoCOaH95kSYC5mAfJ5qrIqRW85EDBN0mfs4Al96XP3uBTzOZhS_1nkE9zUtsMeWQAoXxeJnsvHCF0U6CrrnHRrKeQPU0CJFl-MW1NktBqxwZE7cOa1VfdPThcjVLD74DM8UCMBESlVubl8A3BlX2KBs5t6RvwPTemf47udCBYthcOLFltyVUtNA6UokyR6uMhOkMzztJpld696jyfWl1kBFh1eSe3SsnWiiZ48FRfQ59eLmtQ1-a5EAWeHxJs-u0oTyjTFluDAWNej7cuWhiQ_UOPC1cJLVzpYQjjGe_G6pyv8Bs7AuDV7gerP9cHZGVsLByLi4o9VbUtG0EVBrgBDz3bNPzece7tpoqzm2aYhq7r7Y6wItTUU9af84jjVvdaLjLhNd7LoHb5VxfagCuJiZQXq-uk-1iSmIIf0ZR5pSx-Ytl1kLQwobfaJv9h2kLXkyHbq7bmHYOhE4xzZ1cPPY2xT89IIz0oGTrNYQEsh-7MuYMbSxuEki4bvJSZj2p_raPOqcqHPVwr1GyF9lOsr6EydYRHakXEuEO8=w1115-h627-no?authuser=0"
              alt="comidas tradicionais alemãs"
            />
          </picture>
          <picture>
            <source
              media="(max-width: 999px)"
              srcset="https://lh3.googleusercontent.com/RGZ60RLKcKdLw_PcbVm9InNwp62_hoC1npClbkaBpmd_QZb9CJy7-kRx_1zSvlBdY9mBM5YnNmjeR9PShDDl6rdydsZZkd3HhGLiUymLhqQJabKp0ODW04Utka7Mmfxl10lUyC7YmJfKssudFR099L4ghnHEs8A9t22qM3rl4DyFCW49CyrrQUp5AC2TZrfZXqQVHZkBmzqlcyNtpsTDyZcexfHufY3WRpupcqn_7EIDNLu8M5ORjG7ZcUpOKe7E43dAbhJfmf93o5cPIM99KH0PR6OqQ7AUE5gkJUQ-6r5HwZFfXfvdS1BSp7-0ZPlUSxjB4bqfscHG4-iX30qVVF0OjDIDIDJ-z-s-HNnOYu1bVTrd30cE5Y6RcKM7Peyj-nGgSHwheETboMMOu0dBoo5WMMIamn2zrG-pMIpWfADEz_LMNRjY4fvWs53oMg4XGZe851OH5oifdGWRc57PB917T9rBSoVTcYFiNYcsfNwKIqiVRe0tj2hPg8QnkUi_ctn-4i8F5357XW-Aaffb10KkZAl1_unPfOSqvbGosK5z3zwhMZrnNhIJ4yyZ_Y3Gl9ENojCUHluGWYav0cqwgC8NXVh7KfKdav0Ck3OrSdmZk_sC4xhXYXo6VLT22bLxi8zdlM-AD8jCEMv-iOtN9DbKt-MovrI9FRSsO-wKuxDtvUGHt9XGGcnyNlH42mBu6w7eaGy5eVQBiGPylTqQHPQ=w353-h627-no?authuser=0"
            />
            <img
              src="https://lh3.googleusercontent.com/caWIGQ5-8CKhWGoCrawYgZ9BM7g3urufbgIFm6a4FYc4875Znk-IYD782SrjqxRtnLC26FaOjbe4hqo9FKqAJBA9K4dU9-4fVoTnuCzFbece7FgeMN_ei3zdGRH1KPbvQhILcru-h6LglcofhuhpkQYEaWYyxxwL_64bOpzV7Cb0p3TCJzNsdy2dPw8WaeAsRXxuxlur3gYLgnBKnw80txEUcBJDF2d8YGKq-SB2KiA1-6TyergNDM3r2HkjicmoixaFG4NEsDv59ljzdGyY2xOeFguj8Zdx6VqIpX2vOtFvBiEVBe43HgDu90qF_wCJzdwaShTTb2yrK0io_wdGBR9xdh_IdUBuw6dz-z-ojX7Nzwjy-s6YgIYUH7hGYH4R9bgMGDRD7tCz5qjsoyZv7QD0Z-JlQpBdxeWFFajuoLfkfl4itVQBFPjgtFXbZqWaVEtr_u418N2YDJX23yc02-fViVJy079Ixl_8JXSr42jf9_tcNFo1OXwH-jbE15axRiv0PCtfALuslqsxQynLPIhGtw2CqgiwG99-l-mEtcm66k2oGBsc-Y5tnoYTststaISkboVvgAmfgoumnkQv6Ejps8e7rUnvGpt5zgNWGSy9U0pm_RujWVCi2npwjkBn459weUEVJhnW7Oq_CgYNBWU0otjJFQXjCQ8R_auOdiQ65e7_xmT95VWrsAVDg6YQgt0vmJ2XWspeMVa-d9E9FGU=w1115-h627-no?authuser=0"
              alt="dança tradicional alemã"
            />
          </picture>
        </div>
      </div>
    </>
  );
}

export default Carrossel;
