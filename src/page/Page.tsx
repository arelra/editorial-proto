import React, { FC } from 'react';
import FilterContextWrapper from "../filterContext/filterContext";
import './Page.css';

interface Props {
	children: React.ReactNode;
}

const Page: FC<Props> = ({ children }) => {
    return  (
        <FilterContextWrapper>
            <section className="Page-body">
                <div className="Page-container">
                    <div className="List-container">
                        {children}
                    </div>
                </div>
            </section>
        </FilterContextWrapper>
	);
};
export { Page };
