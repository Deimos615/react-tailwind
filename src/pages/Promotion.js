import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { formAxios } from '../actions/axios'

const Promotion = () => {
  const { register, handleSubmit } = useForm()
  const [file, setFile] = useState(null)
  const handleUpload = () => {
    document.getElementById('file').click();
  }

  const onSubmit = async (e) => {
    if (e.agree) {
      e.file = file
      try {
        const response = await formAxios.post('/promotion', e)
          alert(response.data.message)
          console.log(response.data.promotion)
          // Router.push("/success")
      } catch (err) {
        alert(err.response.data.message + (err.response.data.error ? ': ' + err.response.data.error : ''))
      }
      console.log(e)
    } else {
      alert('Please check agreement')
    }
  }

  const handleFile = (e) => {
    let file = e.target.files
    if (file) {
      const fileType = file[0]['type']
      const validImageTypes = ['image/gif', 'image/jpeg', 'image/png']
      if (validImageTypes.includes(fileType)) {
        setFile(file[0])
      } else {
        console.log('Imvalid Image.')
      }
    }
  }

  return (
    <>
      <div className="recruitment">
        <div className="recruitment-body">
          <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-24">
            <div>
              <div className="recruitment-title font-sans capitalize">
                Is <span className='logo_text'>Due Diligenze</span> the right platform for your community?
              </div>
              <div className="recruitment-content">
                <svg xmlns="http://www.w3.org/2000/svg" width="4vw" height="4vw" viewBox="0 0 64 65" fill="none">
                  <g clipPath="url(#clip0_249_1644)">
                    <path d="M33.7778 34.0356C33.4447 34.3668 32.9941 34.5526 32.5244 34.5526C32.0548 34.5526 31.6042 34.3668 31.2711 34.0356L25.9378 28.7023C25.1766 29.8341 24.7569 31.1609 24.7289 32.5245C24.7289 33.9626 25.1553 35.3684 25.9543 36.5641C26.7532 37.7599 27.8888 38.6918 29.2175 39.2422C30.5461 39.7925 32.0081 39.9365 33.4185 39.6559C34.829 39.3754 36.1246 38.6829 37.1414 37.666C38.1583 36.6491 38.8508 35.3535 39.1314 33.9431C39.4119 32.5326 39.268 31.0706 38.7176 29.742C38.1673 28.4134 37.2353 27.2778 36.0396 26.4788C34.8439 25.6799 33.4381 25.2534 32 25.2534C30.7494 25.261 29.523 25.5983 28.4444 26.2312L33.7778 31.5645C34.0982 31.896 34.2773 32.339 34.2773 32.8001C34.2773 33.2611 34.0982 33.7041 33.7778 34.0356Z" fill="#111111" />
                    <path d="M32 4.07985C29.4457 4.08693 26.9041 4.43976 24.4444 5.12874L27.2889 12.0443C31.7671 10.9978 36.4646 11.4403 40.6686 13.3048C44.8726 15.1693 48.3539 18.354 50.5844 22.3759C52.8148 26.3977 53.6727 31.0373 53.028 35.5908C52.3833 40.1443 50.2711 44.3634 47.0118 47.6079C43.7525 50.8525 39.524 52.9456 34.9676 53.5697C30.4112 54.1938 25.7755 53.3149 21.7638 51.0663C17.7521 48.8177 14.5831 45.322 12.7377 41.1096C10.8922 36.8972 10.471 32.1978 11.5378 27.7243L4.63997 24.8443C3.03117 30.5816 3.2647 36.6792 5.30761 42.2766C7.35053 47.874 11.0997 52.6885 16.0259 56.0406C20.9521 59.3927 26.8066 61.1132 32.7632 60.9592C38.7197 60.8052 44.4775 58.7845 49.224 55.1823C53.9704 51.5801 57.4657 46.5783 59.2166 40.8828C60.9676 35.1873 60.8857 29.0857 58.9826 23.4393C57.0795 17.7928 53.4512 12.8866 48.6098 9.41303C43.7685 5.93947 37.9585 4.07398 32 4.07985Z" fill="#111111" />
                    <path d="M14.2222 28.8623C13.4442 32.6649 13.9105 36.617 15.5523 40.1341C17.1941 43.6512 19.9242 46.5466 23.3388 48.3921C26.7535 50.2376 30.6714 50.9352 34.5131 50.3818C38.3549 49.8284 41.9166 48.0533 44.6715 45.319C47.4264 42.5848 49.2283 39.0366 49.8106 35.1991C50.3929 31.3616 49.7248 27.4385 47.9051 24.0101C46.0854 20.5816 43.2106 17.8298 39.706 16.1616C36.2013 14.4934 32.2528 13.9973 28.4444 14.7467L31.4489 22.0534H32C34.0667 22.0534 36.087 22.666 37.8057 23.8138C39.5244 24.9617 40.8642 26.5932 41.6559 28.5023C42.4476 30.4114 42.6557 32.5123 42.2537 34.5395C41.8518 36.5668 40.858 38.4294 39.3979 39.892C37.9377 41.3547 36.0768 42.3517 34.0502 42.757C32.0236 43.1624 29.9224 42.9579 28.012 42.1694C26.1016 41.381 24.4678 40.0439 23.317 38.3272C22.1662 36.6105 21.5502 34.5912 21.5467 32.5245V31.9023L14.2222 28.8623Z" fill="#111111" />
                    <path d="M14.5778 24.24C14.7419 24.4074 14.9655 24.5033 15.2 24.5066H21.6889L25.8666 28.6844C26.5094 27.6657 27.3952 26.8227 28.4444 26.2311L24.0533 21.8577V15.6533C24.05 15.4188 23.9541 15.1952 23.7866 15.0311L13.8489 5.09329C13.7246 4.97148 13.5674 4.88881 13.3966 4.85552C13.2258 4.82224 13.049 4.83982 12.8881 4.90606C12.7272 4.97231 12.5893 5.08432 12.4915 5.22821C12.3937 5.3721 12.3402 5.54154 12.3378 5.71552V12.8266H5.33331C5.15933 12.8291 4.9899 12.8825 4.84601 12.9804C4.70212 13.0782 4.59011 13.2161 4.52386 13.377C4.45761 13.5379 4.44004 13.7147 4.47332 13.8855C4.5066 14.0562 4.58928 14.2135 4.71109 14.3377L14.5778 24.24Z" fill="#FD0D1B" />
                  </g>
                  <defs>
                    <clipPath id="clip0_249_1644">
                      <rect width="64" height="64" fill="white" transform="translate(0 0.524414)" />
                    </clipPath>
                  </defs>
                </svg>
                <div className="recruitment-description font-sans font-extrabold">
                  Define your goals
                </div>
                <div className="description_rec font-sans">
                  Let's start by understanding your business goals. Are you looking to increase sales, generate leads or create brand awareness? We will help you define the goals that will maximize your success online.
                </div>
              </div>
              <div className="recruitment-content">
                <svg xmlns="http://www.w3.org/2000/svg" width="4vw" height="4vw" viewBox="0 0 64 65" fill="none">
                  <path d="M32 29.8578C33.4667 29.8578 34.7227 29.3351 35.768 28.2898C36.8133 27.2444 37.3351 25.9893 37.3333 24.5244C37.3333 23.0578 36.8107 21.8018 35.7653 20.7564C34.72 19.7111 33.4649 19.1893 32 19.1911C30.5333 19.1911 29.2773 19.7138 28.232 20.7591C27.1867 21.8044 26.6649 23.0595 26.6667 24.5244C26.6667 25.9911 27.1893 27.2471 28.2347 28.2924C29.28 29.3378 30.5351 29.8595 32 29.8578ZM18.6667 29.3244V19.1911H13.3333V21.8578C13.3333 23.5466 13.8222 25.0693 14.8 26.4258C15.7778 27.7822 17.0667 28.7484 18.6667 29.3244ZM45.3333 29.3244C46.9333 28.7466 48.2222 27.7795 49.2 26.4231C50.1778 25.0666 50.6667 23.5449 50.6667 21.8578V19.1911H45.3333V29.3244ZM29.3333 51.1911V42.9244C27.1556 42.4355 25.2107 41.5129 23.4987 40.1564C21.7867 38.8 20.5316 37.1004 19.7333 35.0578C16.4 34.6578 13.6107 33.2026 11.3653 30.6924C9.12 28.1822 7.99822 25.2373 8 21.8578V19.1911C8 17.7244 8.52267 16.4684 9.568 15.4231C10.6133 14.3778 11.8684 13.856 13.3333 13.8578H18.6667C18.6667 12.3911 19.1893 11.1351 20.2347 10.0898C21.28 9.04442 22.5351 8.52264 24 8.52442H40C41.4667 8.52442 42.7227 9.04709 43.768 10.0924C44.8133 11.1378 45.3351 12.3929 45.3333 13.8578H50.6667C52.1333 13.8578 53.3893 14.3804 54.4347 15.4258C55.48 16.4711 56.0018 17.7262 56 19.1911V21.8578C56 25.2355 54.8773 28.1804 52.632 30.6924C50.3867 33.2044 47.5982 34.6595 44.2667 35.0578C43.4667 37.1022 42.2107 38.8026 40.4987 40.1591C38.7867 41.5155 36.8427 42.4373 34.6667 42.9244V51.1911H42.6667C43.4222 51.1911 44.056 51.4471 44.568 51.9591C45.08 52.4711 45.3351 53.104 45.3333 53.8578C45.3333 54.6133 45.0773 55.2471 44.5653 55.7591C44.0533 56.2711 43.4204 56.5262 42.6667 56.5244H21.3333C20.5778 56.5244 19.944 56.2684 19.432 55.7564C18.92 55.2444 18.6649 54.6115 18.6667 53.8578C18.6667 53.1022 18.9227 52.4684 19.4347 51.9564C19.9467 51.4444 20.5796 51.1893 21.3333 51.1911H29.3333Z" fill="#111111" />
                </svg>
                <div className="recruitment-description font-sans font-extrabold">
                  Design interesting ads
                </div>
                <div className="description_rec font-sans">
                  Design attractive ads that highlight your products or services. Eye-catching images, persuasive copy, and compelling calls-to-action will ensure your ads stand out from the competition.
                </div>
              </div>
              <div className="recruitment-content">
                <svg xmlns="http://www.w3.org/2000/svg" width="4vw" height="4vw" viewBox="0 0 64 65" fill="none">
                  <g clipPath="url(#clip0_249_1676)">
                    <path d="M32 11.1911C27.7807 11.1911 23.6561 12.4423 20.1478 14.7864C16.6396 17.1305 13.9052 20.4623 12.2906 24.3605C10.6759 28.2587 10.2534 32.5481 11.0766 36.6863C11.8997 40.8246 13.9315 44.6258 16.9151 47.6094C19.8986 50.5929 23.6998 52.6247 27.8381 53.4478C31.9763 54.271 36.2658 53.8485 40.1639 52.2338C44.0621 50.6192 47.3939 47.8848 49.738 44.3766C52.0822 40.8683 53.3333 36.7438 53.3333 32.5244C53.3312 26.8671 51.0829 21.4421 47.0826 17.4418C43.0823 13.4415 37.6573 11.1932 32 11.1911ZM16 32.5244C16.0037 31.5446 16.0974 30.5671 16.28 29.6044L25.6 38.9244V41.0577C25.6035 42.1883 26.0542 43.2715 26.8536 44.0709C27.653 44.8702 28.7362 45.3209 29.8667 45.3244V48.3644C26.0312 47.8461 22.5132 45.956 19.9639 43.0439C17.4146 40.1318 16.0064 36.3948 16 32.5244ZM40.5333 41.0577H38.4V34.6577C38.3986 34.0924 38.1734 33.5506 37.7736 33.1508C37.3738 32.751 36.832 32.5258 36.2667 32.5244H23.4667V28.2577H27.7333C28.2987 28.2563 28.8405 28.0311 29.2403 27.6314C29.64 27.2316 29.8653 26.6898 29.8667 26.1244V21.8577H34.1333C35.2156 21.8531 36.2556 21.4373 37.0429 20.6947C37.8301 19.952 38.3057 18.9379 38.3733 17.8577C40.6786 18.8543 42.7162 20.3809 44.3204 22.3133C45.9246 24.2457 47.0501 26.5294 47.6054 28.9787C48.1607 31.428 48.1301 33.9738 47.5161 36.4091C46.9022 38.8444 45.7221 41.1004 44.072 42.9937C43.6929 42.3992 43.1698 41.9099 42.5512 41.5715C41.9326 41.233 41.2385 41.0563 40.5333 41.0577ZM34.6667 3.19108C34.6667 3.7185 34.5103 4.23407 34.2173 4.6726C33.9242 5.11113 33.5078 5.45293 33.0205 5.65476C32.5332 5.85659 31.997 5.9094 31.4798 5.80651C30.9625 5.70361 30.4873 5.44964 30.1144 5.0767C29.7414 4.70376 29.4875 4.2286 29.3846 3.71132C29.2817 3.19404 29.3345 2.65786 29.5363 2.17059C29.7382 1.68332 30.0799 1.26685 30.5185 0.973828C30.957 0.680811 31.4726 0.524414 32 0.524414C32.7072 0.524414 33.3855 0.805366 33.8856 1.30546C34.3857 1.80556 34.6667 2.48384 34.6667 3.19108ZM48 5.85775C48 6.38516 47.8436 6.90074 47.5506 7.33927C47.2576 7.7778 46.8411 8.11959 46.3538 8.32143C45.8666 8.52326 45.3304 8.57607 44.8131 8.47318C44.2958 8.37028 43.8207 8.11631 43.4477 7.74337C43.0748 7.37043 42.8208 6.89527 42.7179 6.37799C42.615 5.86071 42.6678 5.32453 42.8697 4.83726C43.0715 4.34999 43.4133 3.93351 43.8518 3.6405C44.2903 3.34748 44.8059 3.19108 45.3333 3.19108C46.0406 3.19108 46.7189 3.47203 47.219 3.97213C47.7191 4.47223 48 5.1505 48 5.85775ZM58.6667 16.5244C58.6667 17.0518 58.5103 17.5674 58.2173 18.0059C57.9242 18.4445 57.5078 18.7863 57.0205 18.9881C56.5332 19.1899 55.997 19.2427 55.4798 19.1398C54.9625 19.0369 54.4873 18.783 54.1144 18.41C53.7414 18.0371 53.4875 17.5619 53.3846 17.0447C53.2817 16.5274 53.3345 15.9912 53.5363 15.5039C53.7382 15.0167 54.0799 14.6002 54.5185 14.3072C54.957 14.0141 55.4726 13.8577 56 13.8577C56.7072 13.8577 57.3855 14.1387 57.8856 14.6388C58.3857 15.1389 58.6667 15.8172 58.6667 16.5244ZM64 32.5244C64 33.0518 63.8436 33.5674 63.5506 34.0059C63.2576 34.4445 62.8411 34.7863 62.3538 34.9881C61.8666 35.1899 61.3304 35.2427 60.8131 35.1398C60.2958 35.0369 59.8207 34.783 59.4477 34.41C59.0748 34.0371 58.8208 33.5619 58.7179 33.0447C58.615 32.5274 58.6678 31.9912 58.8697 31.5039C59.0715 31.0167 59.4133 30.6002 59.8518 30.3072C60.2903 30.0141 60.8059 29.8577 61.3333 29.8577C62.0406 29.8577 62.7189 30.1387 63.219 30.6388C63.7191 31.1389 64 31.8172 64 32.5244ZM58.6667 48.5244C58.6667 49.0518 58.5103 49.5674 58.2173 50.0059C57.9242 50.4445 57.5078 50.7863 57.0205 50.9881C56.5332 51.1899 55.997 51.2427 55.4798 51.1398C54.9625 51.0369 54.4873 50.783 54.1144 50.41C53.7414 50.0371 53.4875 49.5619 53.3846 49.0447C53.2817 48.5274 53.3345 47.9912 53.5363 47.5039C53.7382 47.0167 54.0799 46.6002 54.5185 46.3072C54.957 46.0141 55.4726 45.8577 56 45.8577C56.7072 45.8577 57.3855 46.1387 57.8856 46.6388C58.3857 47.1389 58.6667 47.8172 58.6667 48.5244ZM48 59.1911C48 59.7185 47.8436 60.2341 47.5506 60.6726C47.2576 61.1111 46.8411 61.4529 46.3538 61.6548C45.8666 61.8566 45.3304 61.9094 44.8131 61.8065C44.2958 61.7036 43.8207 61.4496 43.4477 61.0767C43.0748 60.7038 42.8208 60.2286 42.7179 59.7113C42.615 59.194 42.6678 58.6579 42.8697 58.1706C43.0715 57.6833 43.4133 57.2668 43.8518 56.9738C44.2903 56.6808 44.8059 56.5244 45.3333 56.5244C46.0406 56.5244 46.7189 56.8054 47.219 57.3055C47.7191 57.8056 48 58.4838 48 59.1911ZM34.6667 61.8577C34.6667 62.3852 34.5103 62.9007 34.2173 63.3393C33.9242 63.7778 33.5078 64.1196 33.0205 64.3214C32.5332 64.5233 31.997 64.5761 31.4798 64.4732C30.9625 64.3703 30.4873 64.1163 30.1144 63.7434C29.7414 63.3704 29.4875 62.8953 29.3846 62.378C29.2817 61.8607 29.3345 61.3245 29.5363 60.8373C29.7382 60.35 30.0799 59.9335 30.5185 59.6405C30.957 59.3475 31.4726 59.1911 32 59.1911C32.7072 59.1911 33.3855 59.472 33.8856 59.9721C34.3857 60.4722 34.6667 61.1505 34.6667 61.8577ZM21.3333 59.1911C21.3333 59.7185 21.1769 60.2341 20.8839 60.6726C20.5909 61.1111 20.1744 61.4529 19.6872 61.6548C19.1999 61.8566 18.6637 61.9094 18.1464 61.8065C17.6291 61.7036 17.154 61.4496 16.7811 61.0767C16.4081 60.7038 16.1541 60.2286 16.0512 59.7113C15.9483 59.194 16.0012 58.6579 16.203 58.1706C16.4048 57.6833 16.7466 57.2668 17.1851 56.9738C17.6237 56.6808 18.1393 56.5244 18.6667 56.5244C19.3739 56.5244 20.0522 56.8054 20.5523 57.3055C21.0524 57.8056 21.3333 58.4838 21.3333 59.1911ZM10.6667 48.5244C10.6667 49.0518 10.5103 49.5674 10.2173 50.0059C9.92424 50.4445 9.50776 50.7863 9.02049 50.9881C8.53322 51.1899 7.99704 51.2427 7.47976 51.1398C6.96248 51.0369 6.48732 50.783 6.11438 50.41C5.74144 50.0371 5.48747 49.5619 5.38457 49.0447C5.28168 48.5274 5.33449 47.9912 5.53632 47.5039C5.73816 47.0167 6.07995 46.6002 6.51848 46.3072C6.95701 46.0141 7.47258 45.8577 8 45.8577C8.70725 45.8577 9.38552 46.1387 9.88562 46.6388C10.3857 47.1389 10.6667 47.8172 10.6667 48.5244ZM5.33333 32.5244C5.33333 33.0518 5.17694 33.5674 4.88392 34.0059C4.5909 34.4445 4.17443 34.7863 3.68716 34.9881C3.19989 35.1899 2.66371 35.2427 2.14643 35.1398C1.62914 35.0369 1.15399 34.783 0.78105 34.41C0.40811 34.0371 0.154134 33.5619 0.0512405 33.0447C-0.0516535 32.5274 0.00115542 31.9912 0.202989 31.5039C0.404823 31.0167 0.746616 30.6002 1.18515 30.3072C1.62368 30.0141 2.13925 29.8577 2.66667 29.8577C3.37391 29.8577 4.05219 30.1387 4.55229 30.6388C5.05238 31.1389 5.33333 31.8172 5.33333 32.5244ZM10.6667 16.5244C10.6667 17.0518 10.5103 17.5674 10.2173 18.0059C9.92424 18.4445 9.50776 18.7863 9.02049 18.9881C8.53322 19.1899 7.99704 19.2427 7.47976 19.1398C6.96248 19.0369 6.48732 18.783 6.11438 18.41C5.74144 18.0371 5.48747 17.5619 5.38457 17.0447C5.28168 16.5274 5.33449 15.9912 5.53632 15.5039C5.73816 15.0167 6.07995 14.6002 6.51848 14.3072C6.95701 14.0141 7.47258 13.8577 8 13.8577C8.70725 13.8577 9.38552 14.1387 9.88562 14.6388C10.3857 15.1389 10.6667 15.8172 10.6667 16.5244ZM21.3333 5.85775C21.3333 6.38516 21.1769 6.90074 20.8839 7.33927C20.5909 7.7778 20.1744 8.11959 19.6872 8.32143C19.1999 8.52326 18.6637 8.57607 18.1464 8.47318C17.6291 8.37028 17.154 8.11631 16.7811 7.74337C16.4081 7.37043 16.1541 6.89527 16.0512 6.37799C15.9483 5.86071 16.0012 5.32453 16.203 4.83726C16.4048 4.34999 16.7466 3.93351 17.1851 3.6405C17.6237 3.34748 18.1393 3.19108 18.6667 3.19108C19.3739 3.19108 20.0522 3.47203 20.5523 3.97213C21.0524 4.47223 21.3333 5.1505 21.3333 5.85775Z" fill="#111111" />
                  </g>
                  <defs>
                    <clipPath id="clip0_249_1676">
                      <rect width="64" height="64" fill="white" transform="translate(0 0.524414)" />
                    </clipPath>
                  </defs>
                </svg>
                <div className="recruitment-description font-sans font-extrabold">
                  Breaking Barriers
                </div>
                <div className="description_rec font-sans">
                  Promote your product in more than 150 countries and reach different professionals from all industries
                </div>
              </div>
            </div>
            <div>
              <div className="recruitment-contact">
                <div className="form-group font-sans">
                  <form onSubmit={handleSubmit(onSubmit)} action='#'>
                    <div>
                      <label htmlFor="fullName" className="input_label">Full Name *</label>
                      <div>
                        <input {...register('fullName')} type="text" className="input_field" placeholder="john david" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="input_label">Your Email *</label>
                      <div>
                        <input {...register('email')} type="text" className="input_field" placeholder="example@youremail.com" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="company" className="input_label">Company *</label>
                      <div>
                        <input {...register('company')} type="text" className="input_field" placeholder="your company name here" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="input_label">Subject *</label>
                      <div>
                        <input {...register('subject')} type="text" className="input_field" placeholder="how can we help" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="product" className="input_label">Product *</label>
                      <div>
                        <input {...register('product')} type="text" className="input_field" placeholder="link of your product" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="upload" className="input_label">upload *</label>
                      <div className='flex justify-center items-center upload-field' onClick={handleUpload}>
                        <div className='flex flex-col items-center justify-center'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="4vw" height="4vw" viewBox="0 0 65 65" fill="none">
                            <path d="M34.5 54.1099V42.1099H42.5L32.5 30.1099L22.5 42.1099H30.5V54.1099H20.5V54.0099C20.164 54.0299 19.844 54.1099 19.5 54.1099C15.5218 54.1099 11.7064 52.5295 8.8934 49.7165C6.08035 46.9034 4.5 43.0881 4.5 39.1099C4.5 31.4139 10.32 25.1419 17.788 24.2819C18.4428 20.859 20.2698 17.7713 22.9548 15.5499C25.6399 13.3284 29.0151 12.112 32.5 12.1099C35.9854 12.1118 39.3612 13.3281 42.0469 15.5495C44.7326 17.7709 46.5604 20.8587 47.216 24.2819C54.684 25.1419 60.496 31.4139 60.496 39.1099C60.496 43.0881 58.9156 46.9034 56.1026 49.7165C53.2896 52.5295 49.4742 54.1099 45.496 54.1099C45.16 54.1099 44.836 54.0299 44.496 54.0099V54.1099H34.5Z" fill="#111111" />
                          </svg>
                          <div className='file_text'>{file ? file.name : 'Please input file here'}</div>
                        </div>
                        <input type='file' id='file' name='file' hidden onChange={handleFile} />
                      </div>
                    </div>
                    <div className='upload_description'>Recommend to use image 1080x1080</div>
                    <div>
                      <label htmlFor="message" className="input_label">Message *</label>
                      <div>
                        <textarea rows="10" {...register('message')} type="text" className="textarea_field" placeholder="hello. i'm search a profile for my project" />
                      </div>
                    </div>
                    <div className='pay_description'>100$</div>
                    <div className="flex justify-center items-center mb-2vw">
                      <input type="checkbox" {...register('agree')} className="agree_checkbox" />
                      <span className="agreement">I am agree with <a className="agreement_term">terms and conditions</a> of Due Diligenze</span>
                    </div>
                    <div className="flex justify-center items-center">
                      <button className="go_home_btn text-white flex items-center justify-between space-x-3">
                        Payment
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Promotion