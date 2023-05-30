import React, { useState } from 'react';

type UseModalBottomReturnType = [boolean, () => void, () => void];

const useModalBottom = (): UseModalBottomReturnType => {
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
