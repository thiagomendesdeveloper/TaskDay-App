import React, { useState } from 'react';

const useModalBottom = () => {
    const [isVisible, setIsVisible] = useState(false);

    const showModal = () => {
        setIsVisible(true);
    };

    const hideModal = () => {
        setIsVisible(false);
    };

    return [isVisible, showModal, hideModal];
};

export { useModalBottom };
