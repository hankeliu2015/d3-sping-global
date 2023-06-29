import React from 'react'
import cls from 'classnames'

type MHIDotsLogoProps = {
  additionalClassNames?: string
}

export function MHIDotsLogo({ additionalClassNames }: MHIDotsLogoProps): JSX.Element {
  return (
    <svg className={cls('mhi-with-text-logo', additionalClassNames)} width="132" height="49" viewBox="0 0 132 49" xmlns="http://www.w3.org/2000/svg">
      <circle className="bottom-left" cx="11.2498" cy="34.4704" r="11.25" />
      <circle className="top-right" cx="30.7503" cy="14.9704" r="11.25" />
      <path
        className="more"
        d="M57.6253 14.6144V3.17181H57.6651L60.1909 14.6144H62.4184L64.9442 3.17181H64.984V14.6144H67.6093V0.281047H63.373L61.3245 10.3987H61.2847L59.2561 0.281047H55V14.6144H57.6253ZM74.1923 14.8352C75.2663 14.8352 76.1215 14.6613 76.7579 14.3133C77.3944 13.9653 77.8816 13.4635 78.2197 12.8077C78.5578 12.1519 78.7766 11.369 78.8761 10.459C78.9755 9.5489 79.0252 8.54516 79.0252 7.44774C79.0252 6.3637 78.9755 5.36331 78.8761 4.44656C78.7766 3.52981 78.5578 2.74355 78.2197 2.08778C77.8816 1.432 77.3944 0.920093 76.7579 0.552056C76.1215 0.184019 75.2663 0 74.1923 0C73.1184 0 72.2632 0.184019 71.6267 0.552056C70.9903 0.920093 70.503 1.432 70.1649 2.08778C69.8268 2.74355 69.6081 3.52981 69.5086 4.44656C69.4092 5.36331 69.3594 6.3637 69.3594 7.44774C69.3594 8.54516 69.4092 9.5489 69.5086 10.459C69.6081 11.369 69.8268 12.1519 70.1649 12.8077C70.503 13.4635 70.9903 13.9653 71.6267 14.3133C72.2632 14.6613 73.1184 14.8352 74.1923 14.8352ZM74.1923 12.7675C73.7681 12.7675 73.4266 12.6705 73.1681 12.4765C72.9095 12.2824 72.7107 11.9746 72.5714 11.553C72.4322 11.1315 72.3394 10.5827 72.293 9.9069C72.2466 9.23104 72.2234 8.41133 72.2234 7.44774C72.2234 6.48415 72.2466 5.66777 72.293 4.99862C72.3394 4.32946 72.4322 3.78075 72.5714 3.35249C72.7107 2.92422 72.9095 2.61306 73.1681 2.41901C73.4266 2.22495 73.7681 2.12792 74.1923 2.12792C74.6166 2.12792 74.958 2.22495 75.2166 2.41901C75.4751 2.61306 75.674 2.92422 75.8132 3.35249C75.9525 3.78075 76.0453 4.32946 76.0917 4.99862C76.1381 5.66777 76.1613 6.48415 76.1613 7.44774C76.1613 8.41133 76.1381 9.23104 76.0917 9.9069C76.0453 10.5827 75.9525 11.1315 75.8132 11.553C75.674 11.9746 75.4751 12.2824 75.2166 12.4765C74.958 12.6705 74.6166 12.7675 74.1923 12.7675ZM83.5797 14.6144V8.55185H85.1111C85.7077 8.55185 86.132 8.71245 86.3839 9.03364C86.6359 9.35484 86.7751 9.79648 86.8016 10.3586L86.8812 13.1088C86.8944 13.3899 86.9209 13.6609 86.9607 13.9218C87.0005 14.1828 87.0933 14.4137 87.2391 14.6144H90.3417V14.494C90.0766 14.3468 89.9042 14.0724 89.8246 13.6709C89.7716 13.2694 89.7318 12.6872 89.7053 11.9244C89.6921 11.5363 89.6788 11.185 89.6655 10.8705C89.6523 10.556 89.6324 10.2649 89.6059 9.99723C89.5263 9.19424 89.3208 8.61207 88.9893 8.25073C88.6579 7.88938 88.1341 7.65518 87.4181 7.54811V7.50796C88.2269 7.33398 88.8236 6.94252 89.2081 6.33359C89.5926 5.72465 89.7849 4.93839 89.7849 3.9748C89.7849 2.73017 89.4534 1.80338 88.7904 1.19445C88.1275 0.585514 87.1994 0.281047 86.0061 0.281047H80.7157V14.6144H83.5797ZM84.773 6.54437H83.5797V2.40897H84.9321C86.258 2.40897 86.9209 3.07144 86.9209 4.39637C86.9209 5.1726 86.7353 5.72465 86.3641 6.05254C85.9928 6.38043 85.4625 6.54437 84.773 6.54437ZM99.9081 14.6144V12.2456H94.6376V8.39125H99.4109V6.02243H94.6376V2.64987H99.7092V0.281047H91.7737V14.6144H99.9081Z"
      />
      <path
        className="human"
        d="M57.8689 31.5752V25.3203H61.216V31.5752H64.0849V17.4868H61.216V22.8735H57.8689V17.4868H55V31.5752H57.8689ZM70.4404 31.7922C71.0248 31.7922 71.5893 31.733 72.1338 31.6147C72.6784 31.4963 73.1632 31.2661 73.5882 30.9241C74.0133 30.582 74.3519 30.1183 74.6043 29.533C74.8567 28.9476 74.9828 28.2077 74.9828 27.3132V17.4868H72.1139V27.3132C72.1139 27.6683 72.0907 27.9939 72.0442 28.2899C71.9977 28.5859 71.9114 28.8424 71.7852 29.0594C71.659 29.2765 71.4897 29.4475 71.2772 29.5724C71.0646 29.6974 70.7857 29.7599 70.4404 29.7599C70.1083 29.7599 69.8327 29.6974 69.6136 29.5724C69.3944 29.4475 69.2218 29.2765 69.0956 29.0594C68.9694 28.8424 68.8831 28.5859 68.8366 28.2899C68.7901 27.9939 68.7668 27.6683 68.7668 27.3132V17.4868H65.8979V27.3132C65.8979 28.2603 66.0241 29.0298 66.2765 29.6218C66.5288 30.2137 66.8675 30.6708 67.2925 30.9931C67.7176 31.3154 68.2024 31.5292 68.7469 31.6344C69.2915 31.7396 69.856 31.7922 70.4404 31.7922ZM79.4855 31.5752V20.3282H79.5253L82.0555 31.5752H84.2869L86.8172 20.3282H86.857V31.5752H89.4868V17.4868H85.2432L83.1912 27.4316H83.1513L81.1192 17.4868H76.8556V31.5752H79.4855ZM93.5312 31.5752L94.1887 28.5957H97.9741L98.6315 31.5752H101.62L97.8545 17.4868H94.3082L90.5428 31.5752H93.5312ZM97.476 26.2674H94.6868L96.0615 19.9335H96.1013L97.476 26.2674ZM105.246 31.5752V21.7094H105.286L108.792 31.5752H112.06V17.4868H109.43V27.1356H109.39L105.923 17.4868H102.616V31.5752H105.246Z"
      />
      <path
        className="internet"
        d="M58.3801 48.7493V34.4438H55.5283V48.7493H58.3801ZM63.1132 48.7493V38.7315H63.1528L66.6382 48.7493H69.8861V34.4438H67.272V44.2413H67.2324L63.7865 34.4438H60.4991V48.7493H63.1132ZM77.055 48.7493V36.808H80.1444V34.4438H71.1139V36.808H74.2033V48.7493H77.055ZM89.472 48.7493V46.3851H84.224V42.5382H88.9769V40.174H84.224V36.808H89.2739V34.4438H81.3722V48.7493H89.472ZM93.7496 48.7493V42.6985H95.2745C95.8686 42.6985 96.2911 42.8588 96.5419 43.1794C96.7928 43.4999 96.9314 43.9407 96.9578 44.5017L97.037 47.2466C97.0502 47.5271 97.0766 47.7976 97.1162 48.058C97.1558 48.3185 97.2483 48.5489 97.3935 48.7493H100.483V48.6291C100.219 48.4821 100.047 48.2083 99.968 47.8076C99.9152 47.4069 99.8756 46.8258 99.8492 46.0645C99.836 45.6771 99.8228 45.3265 99.8096 45.0126C99.7964 44.6987 99.7765 44.4082 99.7501 44.1411C99.6709 43.3397 99.4663 42.7586 99.1362 42.398C98.8062 42.0373 98.2847 41.8036 97.5717 41.6967V41.6567C98.3771 41.483 98.9712 41.0923 99.3541 40.4846C99.7369 39.8768 99.9284 39.0921 99.9284 38.1304C99.9284 36.8882 99.5983 35.9632 98.9382 35.3555C98.2781 34.7477 97.3539 34.4438 96.1657 34.4438H90.8979V48.7493H93.7496ZM94.9378 40.695H93.7496V36.5676H95.0963C96.4165 36.5676 97.0766 37.2288 97.0766 38.5511C97.0766 39.3259 96.8918 39.8768 96.5221 40.2041C96.1525 40.5313 95.6244 40.695 94.9378 40.695ZM104.523 48.7493V38.7315H104.562L108.048 48.7493H111.296V34.4438H108.682V44.2413H108.642L105.196 34.4438H101.909V48.7493H104.523ZM121.376 48.7493V46.3851H116.128V42.5382H120.881V40.174H116.128V36.808H121.178V34.4438H113.276V48.7493H121.376ZM127.99 48.7493V36.808H131.08V34.4438H122.049V36.808H125.139V48.7493H127.99Z"
      />
    </svg>
  )
}

export function MHIHomeLink({ additionalClassNames }: MHIDotsLogoProps): JSX.Element {
  return (
    <a className={cls('home-link', additionalClassNames)} href="/">
      <MHIDotsLogo />
    </a>
  )
}