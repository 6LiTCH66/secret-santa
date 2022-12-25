import React from 'react';
import "./content.css";
import {Santa} from "../../containers";

function Content(props) {
    return (
        <div>
            <div className="content_container">
                <div className="left_content">
                    <div className="text_content">
                        <p className="blog_text">
                            Our Blog
                        </p>
                        <p>
                            Tell a friend
                        </p>
                    </div>
                    <div className="container_links" id="links_id">
                        <a href="#join_santa">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.57 18.82C9.38 18.82 9.19 18.75 9.04 18.6L2.97 12.53C2.68 12.24 2.68 11.76 2.97 11.47L9.04 5.4C9.33 5.11 9.81 5.11 10.1 5.4C10.39 5.69 10.39 6.17 10.1 6.46L4.56 12L10.1 17.54C10.39 17.83 10.39 18.31 10.1 18.6C9.96 18.75 9.76 18.82 9.57 18.82Z" fill="#BC262F"/>
                                <path d="M20.5 12.75H3.66998C3.25998 12.75 2.91998 12.41 2.91998 12C2.91998 11.59 3.25998 11.25 3.66998 11.25H20.5C20.91 11.25 21.25 11.59 21.25 12C21.25 12.41 20.91 12.75 20.5 12.75Z" fill="#BC262F"/>
                            </svg>
                            Join Secret Santa
                        </a>
                    </div>

                </div>
                <div className="middle_container">
                    <Santa/>

                </div>

                <div className="right_container">
                    <div className="right_text_content">
                        Gift ideas
                    </div>
                    <div className="right_rotated_text_content">
                        Create wishlist
                    </div>


                    <div className="container_links2" id="links_id">
                        <a href="#craete_santa">

                            Create Secret Santa
                            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M13.5303 5.53033C13.8232 5.23744 13.8232 4.76256 13.5303 4.46967L9.53033 0.46967C9.23744 0.176777 8.76256 0.176777 8.46967 0.46967C8.17678 0.762563 8.17678 1.23744 8.46967 1.53033L11.1893 4.25H1C0.585787 4.25 0.25 4.58579 0.25 5C0.25 5.41421 0.585787 5.75 1 5.75H11.1893L8.46967 8.46967C8.17678 8.76256 8.17678 9.23744 8.46967 9.53033C8.76256 9.82322 9.23744 9.82322 9.53033 9.53033L13.5303 5.53033Z" fill="white"/>
                            </svg>

                        </a>
                    </div>

                </div>

            </div>

            <div className="bottom_buttons">
                <div className="container_links">
                    <a href="#join_santa">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.57 18.82C9.38 18.82 9.19 18.75 9.04 18.6L2.97 12.53C2.68 12.24 2.68 11.76 2.97 11.47L9.04 5.4C9.33 5.11 9.81 5.11 10.1 5.4C10.39 5.69 10.39 6.17 10.1 6.46L4.56 12L10.1 17.54C10.39 17.83 10.39 18.31 10.1 18.6C9.96 18.75 9.76 18.82 9.57 18.82Z" fill="#BC262F"/>
                            <path d="M20.5 12.75H3.66998C3.25998 12.75 2.91998 12.41 2.91998 12C2.91998 11.59 3.25998 11.25 3.66998 11.25H20.5C20.91 11.25 21.25 11.59 21.25 12C21.25 12.41 20.91 12.75 20.5 12.75Z" fill="#BC262F"/>
                        </svg>
                        Join Secret Santa
                    </a>
                </div>

                <div className="container_links2">
                    <a href="#craete_santa">

                        Create Secret Santa
                        <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M13.5303 5.53033C13.8232 5.23744 13.8232 4.76256 13.5303 4.46967L9.53033 0.46967C9.23744 0.176777 8.76256 0.176777 8.46967 0.46967C8.17678 0.762563 8.17678 1.23744 8.46967 1.53033L11.1893 4.25H1C0.585787 4.25 0.25 4.58579 0.25 5C0.25 5.41421 0.585787 5.75 1 5.75H11.1893L8.46967 8.46967C8.17678 8.76256 8.17678 9.23744 8.46967 9.53033C8.76256 9.82322 9.23744 9.82322 9.53033 9.53033L13.5303 5.53033Z" fill="white"/>
                        </svg>

                    </a>
                </div>
            </div>

        </div>
    );
}

export default Content;