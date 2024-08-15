import benderaIndonesia from '../../image/emojione_flag-for-indonesia.png';
import Image from 'next/image';
import icon_wa from '../../image/ic_baseline-whatsapp.png';
import icon_ig from '../../image/mdi_instagram.png';
import icon_li from '../../image/ri_linkedin-fill.png';
import icon_yt from '../../image/fa_youtube.png';
import icon_search from '../../image/iconamoon_search-thin.png';
import logo from '../../image/logo blue 1.png';

export default function Navbar() {
    return (
        <main className="pt-5 bg-gray-50">
            <div className="flex justify-between  px-8">
                <div className='flex gap-5 '>
                    <select id="negara" className="block outline-none bg-transparent">
                        <option>Indonesia</option>
                        <option>Eng (US)</option>
                        <option>Arabic</option>
                    </select>
                    <div className='flex text-gray-400 gap-2 items-center'>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.6867 13.1484L12.9961 11.4945C12.8289 11.4228 12.6464 11.394 12.4653 11.4106C12.2841 11.4273 12.11 11.4888 11.9586 11.5898C11.9433 11.5997 11.9286 11.6106 11.9149 11.6226L9.98595 13.2632C9.96593 13.2741 9.94365 13.2802 9.92087 13.281C9.89809 13.2818 9.87544 13.2773 9.8547 13.2679C8.61485 12.6695 7.33048 11.3929 6.7297 10.1702C6.71969 10.1498 6.71449 10.1274 6.71449 10.1046C6.71449 10.0819 6.71969 10.0594 6.7297 10.039L8.37579 8.08586C8.3878 8.07156 8.39876 8.05642 8.4086 8.04055C8.50812 7.8886 8.56824 7.71426 8.58351 7.53326C8.59879 7.35226 8.56875 7.17031 8.4961 7.00383L6.85391 3.31945C6.76066 3.10196 6.59937 2.92058 6.39427 2.80254C6.18917 2.68449 5.95132 2.63615 5.71641 2.66477C4.69556 2.79914 3.75854 3.30055 3.08038 4.07533C2.40221 4.85011 2.02928 5.84527 2.03126 6.87492C2.03126 12.9921 7.00782 17.9687 13.125 17.9687C14.1547 17.9706 15.1498 17.5977 15.9246 16.9196C16.6994 16.2414 17.2008 15.3044 17.3352 14.2835C17.3637 14.0497 17.316 13.8129 17.1992 13.6084C17.0824 13.4039 16.9026 13.2425 16.6867 13.1484ZM13.125 17.0312C7.52501 17.0312 2.96876 12.4749 2.96876 6.87492C2.96615 6.0733 3.25548 5.29816 3.7827 4.69431C4.30992 4.09045 5.03896 3.69921 5.8336 3.59367H5.85157C5.88305 3.59426 5.91362 3.60435 5.93928 3.62261C5.96493 3.64087 5.98446 3.66646 5.99532 3.69602L7.64376 7.37648C7.65316 7.39695 7.65803 7.4192 7.65803 7.44172C7.65803 7.46424 7.65316 7.48649 7.64376 7.50695L5.99454 9.46477C5.98229 9.47879 5.97107 9.49367 5.96095 9.5093C5.85775 9.66684 5.79698 9.84837 5.78452 10.0363C5.77207 10.2242 5.80835 10.4122 5.88985 10.582C6.58282 12.0007 8.01251 13.4195 9.44688 14.1124C9.61766 14.1935 9.80653 14.2289 9.99507 14.2152C10.1836 14.2015 10.3654 14.1392 10.5227 14.0343C10.5375 14.0241 10.5524 14.0132 10.5664 14.0015L12.4945 12.3609C12.5136 12.3506 12.5346 12.3446 12.5562 12.3433C12.5778 12.3419 12.5994 12.3453 12.6195 12.353L16.3109 14.007C16.3411 14.0198 16.3665 14.0418 16.3834 14.0698C16.4004 14.0979 16.4081 14.1305 16.4055 14.1632C16.3005 14.9582 15.9096 15.6878 15.3059 16.2156C14.7022 16.7434 13.9269 17.0333 13.125 17.0312ZM11.4063 8.12492V4.99992C11.4063 4.8756 11.4556 4.75637 11.5436 4.66847C11.6315 4.58056 11.7507 4.53117 11.875 4.53117C11.9993 4.53117 12.1186 4.58056 12.2065 4.66847C12.2944 4.75637 12.3438 4.8756 12.3438 4.99992V6.99289L15.2938 4.04367C15.3826 3.96087 15.5001 3.9158 15.6216 3.91794C15.743 3.92008 15.8589 3.96928 15.9448 4.05516C16.0307 4.14104 16.0799 4.25691 16.082 4.37835C16.0841 4.49978 16.0391 4.61731 15.9563 4.70617L13.0063 7.65617H15C15.1243 7.65617 15.2436 7.70556 15.3315 7.79347C15.4194 7.88137 15.4688 8.0006 15.4688 8.12492C15.4688 8.24924 15.4194 8.36847 15.3315 8.45638C15.2436 8.54429 15.1243 8.59367 15 8.59367H11.875C11.7507 8.59367 11.6315 8.54429 11.5436 8.45638C11.4556 8.36847 11.4063 8.24924 11.4063 8.12492Z" fill="#A6A6A6" />
                        </svg>
                        (+62)851 6993 3122
                    </div>
                    <div className='flex text-gray-400 gap-2 items-center'>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.5625 3.75H3.4375C2.57456 3.75 1.875 4.44956 1.875 5.3125V14.6875C1.875 15.5504 2.57456 16.25 3.4375 16.25H16.5625C17.4254 16.25 18.125 15.5504 18.125 14.6875V5.3125C18.125 4.44956 17.4254 3.75 16.5625 3.75Z" stroke="#A6A6A6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M4.375 6.25L10 10.625L15.625 6.25" stroke="#A6A6A6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        hello@alkautsar.id
                    </div>
                </div>
                <div className='flex gap-10 items-center'>
                    <div className='flex gap-2'>
                        <div className='bg-[#A6A6A6] p-2 flex items-center justify-center rounded-full'>
                            <Image src={icon_wa} className='w-4 h-4' />
                        </div>
                        <div className='bg-[#A6A6A6] p-2 flex items-center justify-center rounded-full'>
                            <Image src={icon_ig} className='w-4 h-4' />
                        </div>
                        <div className='bg-[#A6A6A6] p-2 flex items-center justify-center rounded-full'>
                            <Image src={icon_li} className='w-4 h-4' />
                        </div>
                        <div className='bg-[#A6A6A6] p-2 flex items-center justify-center rounded-full'>
                            <Image src={icon_yt} className='w-4 h-4' />
                        </div>
                    </div>
                    <form className='flex justify-between border border-[#A6A6A6] rounded-full py-1 px-2'>
                        <input type="text" placeholder='Search' className='w-32 outline-none bg-transparent' />
                        <Image src={icon_search} />
                    </form>
                </div>
            </div>
            <div className='flex justify-between mt-2 bg-white py-2 px-8'>
                <Image src={logo} />
                <ul className='flex gap-4 items-center text-sm'>
                    <li className='hover:text-blue-600'>About</li>
                    <li className='hover:text-blue-600'>Produk</li>
                    <li className='hover:text-blue-600'>Pendaftaran</li>
                    <li className='hover:text-blue-600'>Donasi</li>
                    <li className='hover:text-blue-600'>
                        <select id="negara" name='Blog' className="block outline-none bg-transparent w-14">
                            <option>Blog</option>
                            <option>option 2</option>
                            <option>option 3</option>
                        </select>
                    </li>
                    <li className='hover:text-blue-600'>Kontak</li>
                    <li className='hover:text-blue-600'>Masuk</li>
                    <li className='bg-[#002EC1] text-white py-2 px-2 rounded-full'>Daftar Sekarang</li>
                </ul>
            </div>
        </main>
    );
}