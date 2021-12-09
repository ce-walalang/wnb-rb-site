import React from 'react';
import PropTypes from 'prop-types';

const SponsorUsInfoCard = ({ title, section, children }) => {
    return (
        <div className="container max-w-2xl my-8 mx-3 p-4 flex flex-col">
            <div className="flex items-center">
                {children}
                <h3 className="text-2xl font-bold mx-2 my-2">{title}</h3>
            </div>
            <div className="ml-5 sm:ml-10 text-base leading-7">{section}</div>
        </div>
    );
};

SponsorUsInfoCard.propTypes = {
    title: PropTypes.string,
    section: PropTypes.object,
    children: PropTypes.object,
};

export default SponsorUsInfoCard;
