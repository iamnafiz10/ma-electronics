'use client';

import Image from 'next/image';
import Link from 'next/link';
import {FaFacebookF, FaYoutube, FaLinkedin} from 'react-icons/fa';
import {HiOutlineLocationMarker, HiOutlinePhone, HiOutlineMail} from 'react-icons/hi';
import GooglePlay from '../../../public/assets/images/google.svg';
import AppStore from '../../../public/assets/images/app.svg';
import AppGallery from '../../../public/assets/images/gallery.svg';
import paymentImg from '../../../public/assets/images/payment-method.png';
import logoImg from '../../../public/assets/images/logo-black.png';

function Footer() {
    return (
        <>
            <footer className="bg-white border-t border-gray-200 mt-16 py-8">
                <div className="container">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Brand Info */}
                        <div className="col">
                            <div className="flex items-center gap-2 mb-4">
                                <Image src={logoImg} width={150} height={100} className="cursor-pointer" alt="logo"/>
                            </div>
                            <p className="text-gray-800 font-semibold mb-4">Authorized Electronics Store in Rajshahi</p>
                            <ul className="text-gray-600 space-y-2">
                                <li className="flex items-center gap-2"><HiOutlineLocationMarker
                                    className="text-primary"/> Yakubiar Mor, Rajshahi
                                </li>
                                <li className="flex items-center gap-2"><HiOutlinePhone
                                    className="text-primary"/> 01321764096
                                </li>
                                <li className="flex items-center gap-2"><HiOutlineMail
                                    className="text-primary"/> abcrajshahi@gmail.com
                                </li>
                            </ul>
                            <div className="flex gap-3 mt-4">
                                <Link href="#"
                                      className="text-white bg-primary p-2 rounded hover:bg-dark-primary"><FaFacebookF/></Link>
                                <Link href="#"
                                      className="text-white bg-primary p-2 rounded hover:bg-dark-primary"><FaYoutube/></Link>
                                <Link href="#"
                                      className="text-white bg-primary p-2 rounded hover:bg-dark-primary"><FaLinkedin/></Link>
                            </div>
                        </div>

                        {/* Get to Know Us */}
                        <div className="col">
                            <h3 className="text-[15px] font-semibold text-primary pb-2 mb-4 relative">
                                Get to Know Us
                                <span className="absolute bottom-0 left-0 w-1/4 border-b-2 border-primary"></span>
                            </h3>
                            <ul className="space-y-2 text-gray-600">
                                <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
                                <li><Link href="#" className="hover:text-primary transition-colors">Privacy
                                    Policy</Link>
                                </li>
                                <li><Link href="#" className="hover:text-primary transition-colors">Terms &
                                    Conditions</Link></li>
                                <li><Link href="#" className="hover:text-primary transition-colors">AC World Blog</Link>
                                </li>
                            </ul>
                        </div>

                        {/* Help */}
                        <div className="col">
                            <h3 className="text-[15px] font-semibold text-primary pb-2 mb-4 relative">
                                Help
                                <span className="absolute bottom-0 left-0 w-1/4 border-b-2 border-primary"></span>
                            </h3>
                            <ul className="space-y-2 text-gray-600">
                                <li><Link href="#" className="hover:text-primary transition-colors">Payment</Link></li>
                                <li><Link href="#" className="hover:text-primary transition-colors">Delivery</Link></li>
                                <li><Link href="#" className="hover:text-primary transition-colors">Return &
                                    Replacement</Link></li>
                                <li><Link href="#" className="hover:text-primary transition-colors">AC World
                                    Support</Link>
                                </li>
                            </ul>
                        </div>

                        {/* Download */}
                        <div className="col">
                            <h3 className="text-[15px] font-semibold text-primary pb-2 mb-4 relative">
                                Download
                                <span className="absolute bottom-0 left-0 w-1/4 border-b-2 border-primary"></span>
                            </h3>
                            <div className="flex flex-col gap-3">
                                <Image src={GooglePlay} alt="Google Play"
                                       className="w-36 bg-black rounded-md cursor-pointer"/>
                                <Image src={AppStore} alt="App Store"
                                       className="w-36 bg-black rounded-md cursor-pointer"/>
                                <Image src={AppGallery} alt="AppGallery"
                                       className="w-36 bg-black rounded-md cursor-pointer"/>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-200">
                    <div
                        className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
                        <span>© 2025 AC WORLD | All Rights Reserved.</span>
                        <div className="flex gap-3 mt-2 md:mt-0">
                            <Image src={paymentImg} alt="payment" width={300} height={100}/>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;