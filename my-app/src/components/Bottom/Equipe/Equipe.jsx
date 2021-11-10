import React from 'react';
import "./style.css"

let membroFoto = [
    "https://lh3.googleusercontent.com/ITCrGrDdoxC1mhG015UV7cDAkXLORd_4RgcsXT2_E--F27apDKjBPG8urNcwtLWuP_zCYKD4RKTdchhRF-N106wZ9XaTDTt19uyAoV4ybmrT0tM-7KxwFX2msEpmVenNdr0YN_kghMz4zkGw13PguF1jYkAlyUB0FFZHSl_b2fzbBVs3NyjjweJ0iiDARhP3z5PhzpazyU_-Ga-ZF0I4DdlsXgwJ67hvZpXB6ktE3i6pL0we42xtfKg5Bh-4ayXW_0vmJCe_dprcW6iFa-O1AAFkPXO6Zq_JZyFiPXfXDfP_eZP-o5dbzrJ7mX0ZIFlvzFKc2w48QJZhuj2djQ34kRXEKmEQbDF5XRl7ataMkWJxyiqNsDyNGGBwt7sVeZqREx9rDeqNVkHnf6l6hFxVW8_Yqn-NVGocrODkbqNZ4f74ob94AtzYSg_t8OPJIG_r7rePEN3PU7ZwuRh1ifMgq58Eac2iCBuscyplePe_t2HyeJi3W2fSccCZlNzmrALtdWeyiAw6mz9S0OeIXR5g3oAq_2a95Pz4jwlSW28xktjVaMBKwKwIjhdT2ehv5IE-JSTH-VT4ffOBat-InvSpSYIhCquebLDm8aisLna7vNBU1O6k82xIw5DBeJdNNHX2JRgJPWTSesqiQoCzAMUN3G33pKj2WwA4pa-f11LTpgK0QW5f0o8Hkuhf84xYTnUdtKFZLaqnsIFAzXM1nD-8vhuk=s627-no?authuser=0",
    "https://lh3.googleusercontent.com/1mdn2VYsRxBaoLya7BrY8aHNQasxSdOZoZoVQDqForcpP36U8BISTodq_leXFYyKs-77nFuaHtiTVfXhsDktGXRqS4aATFR-8OpTCk46KcjROSz0MC65pYwkz50W4r6qv0S-66e1TE-AI77mLk19dD4YvbTdnTWyocdCLkQ8Gc49n9t5Fw8xyT8vy1YmS7WR3L2z_crBBTNIp0bpRyLSdn2Q-xqYfnZ7jOVNCPA7uI-HeVKwMpQ6Ir_PgNHpuuy9PgjZBI2TwrS9MRAZpWRUD2s463aBRlY0D4TNvkWqZ2Tuebv6WKVV9haDf2nWTL3E0pK4Dcjzm1pn0Oq9OCiHkQDDAuJPhsPWhz4AHMkk8v2LeTfhxGZMpyWvWFjE9unlQ9yGzdNZswvj-5RPEwT2UnWrQLz_68cah0a0wHNWwDkp3PMHPDEgLaNKpKG7ObR70oGPbFi9ScC6H-hBrfNH7P4qCRcdiMc4kJ6P2IB6uB4g7w7Wbid7blNkDv1MzW70EquwbgB8yvwCYPY1ItazkqRomnaRMzRpq8qdRAWH4cekfp1G5yHwfidPHnaOOOcitwu_IxPt1wqHadrojuzidwrpqa_dkg9Vt7un28WDof2zCSd0dahSHYJzArA7pcn5mo-VmDAb4IIuL0h9M5jVmhtq76Yb2b4zLD1PpwXSG4DO6T2Aip79X5ku4JMeNiIZ_VPCRXUoSzSUTv-ZJVP1AbBn=s627-no?authuser=0", 
    "https://lh3.googleusercontent.com/8IVDZ1h7VrvQOwo1vW9NFmlLbW-OhtwosCZLN18TNmzWiH1CXqw5cEMbZoSTsTNWkWZePaVPgnh_arjXFeBP1zzbwHbz7opQhx0QpGDXewHXIBjKSyQ8NAeMd8mPD8w8FE4CP7xsLloIiEatLR0PCBSGKNfcmyZ_1KPrJAqsYEXcFFVh0T4Wx-YoL8qsOT5qrgdHGNAdpXRise-B8oMNxLtjXdo80KqzKV0dMZAUno-iGvAvZhTnuzR50X-19aBcEF931rymB0Krj0Z-AfEqL9AVoqVeL1p35e-WU6_U-7woHpZROcvcxM9YPJaE8vTYyamnAR7bUthLkh6D9ZcX7fXc09Bf99s5j1I6Z7nqtw774R_PtUnW5Z_UGjND51TkIDkZcaWBqeNf48s_m5wjph7h8uL4THBxuetuma8zDdkY43Fekn7c8qxUGzrkZ3EnpG5Kc375E0mV8rlpGFnMrsHfAJ5kfJ62IsLROco3NNb76teuy8CQvzDa3GrHzfrJuvzR5J1lUXmu4qMTY1IW00ip_Ug0koL1oqfVFMqOg3V0iT2RWaTEXEQyB3kU3H9tT3-3SNOWnjApAP7eA7FBZfFGJS3NJ3blmxP-rl7nP1_SxcAY_oaRzaKcad1tfhYiBy9WDe-G_TmmibvlTuTK9d_xvAkYk-IVjtHe57nSjHop3N6svAooxGS1Pu1PcIN8OO6M0TLNJw6BgWb4mKsP-wNk=s627-no?authuser=0",
    "https://lh3.googleusercontent.com/ZkepNdlsDIOVDsIqSsnG1b9LT73W5iarqAyOu-cC_3uUhIdHmTh5EMx89F9zQJeAZcdebwsB1pGFOzTrvXM4yM1pboC2kTPVbWWXKphoScMOis6NSUnMlvRA7Y6dpF8gk-M7GdYAyASCiDcplC5HUxyvAXhqAeTjZ0wdLHQ4XeEVTaNZYd_GqfjvqJ5Huo2re1tfXTe3upE-FjzhS0tmam1ULOV8U1UIsiC7hVb4PxOsnxDvUSW0RywMdC3ET4KrBvvL6wUvxcUGjasQnyolxhSRTJr8qGT1o0aBWNsmI49W__KGJEqANHz5H7cTI7SexBSKu2AQHJMIeKjl0BrybQz_9EZ2dCnBKOX7Dm6Qig3aBqCKBpEQBrznEOwISqIhEgZ-fDNKIZp5AUmy1Gim_rRZhQWbHaTsS4dRjIf8XqKLVkjBcKaLLUtawbTV3AJ21bgqfkM9R-UdZRB-i_7_r8hT1W6aH3xaWkzD8Is4L8gvSTFVgJn5m_pJk2VvyZOAaWdn9oMbeQdAOUJiqCfIa6Qm5_XZsrG856viQePR10W1BdkA5jJqPgbgDRm0K7aj-RqsF9ExkmX-9lf3YuXpQiAQtQjSYPNUkSlnO5Gs4fThMwuFkX002Qvb4eCO7TL8fdXMoZ22HNfq-YZr55n51PPwvuvJn0oXRaSoYDfBRBTjwY1oSSr1gSb-apk4PAGedkNzRE9qL9gTEKCyGrlY1_WW=s627-no?authuser=0"
]

function Equipe() {
    return(
        <section className="time" id="equipe">
        
        <h1 className="titulo" id="titulo-nome">Equipe</h1>
        <h2 className="subtitulo" id="sub-nome">squad 8 - #TEUFUTURO</h2>
        
        <a href="https://www.linkedin.com/in/gabriel-de-moura-jank-209b18218/" target="_blank">
          <img src={membroFoto[0]} className="membro" alt="foto de Gabriel Jank"/>
        </a>
        <a href="https://www.linkedin.com/in/cristian-martini-78bb92210/" target="_blank">
          <img src={membroFoto[1]} className="membro" alt="foto de Cristian Martini"/>
        </a>
        <a href="https://www.linkedin.com/in/andrei-bacin-70762b220/" target="_blank">
          <img src={membroFoto[2]} className="membro" alt="foto de Andrei Bacin"/>
        </a>
        <a href="https://www.linkedin.com/in/leonardo-de-oliveira-telles-921393214/" target="_blank">
          <img src={membroFoto[3]} className="membro" alt="foto de Leonardo teles"/>
        </a>

        { /* nomes*/ }

        <div className="time-nome">
          <a href="https://github.com/GabJank" target="_blank">
            <h2 className="membro-nome">Gabriel Jank</h2>
          </a>
          <a href="https://github.com/CristianC12" target="_blank">
            <h2 className="membro-nome">Cristian Martini</h2>
          </a>
          <a href="https://github.com/dreyb" target="_blank">
            <h2 className="membro-nome">Andrei Bacin</h2>
          </a>
          <a href="https://github.com/LeonardoTelles1204" target="_blank">
            <h2 className="membro-nome">Leonardo Telles</h2>
          </a>
        </div>

        <h1 className="titulo" id="titulo-video">Explicação</h1>
        <h2 className="subtitulo">Como montamos a LandingPage?</h2>
        <div className="video">
          <iframe height="315" src="https://www.youtube.com/embed/93d7H5XlwsU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </section>
    );
}

export default Equipe;