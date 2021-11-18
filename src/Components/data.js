import React from 'react';
import {
    FaHome,
    FaUserFriends,
    FaConnectdevelop,
    FaEnvelope,
    FaGopuram,
    FaIndustry,
    FaGifts,
    FaUsers,
} from 'react-icons/fa';
export const links = [
    {
        id: 1,
        url: '/',
        text: 'Home',
        icon: <FaHome />,
    },
    {
        id: 2,
        url: '/mesage',
        text: 'Message',
        icon: <FaEnvelope />,
    },
    {
        id: 3,
        url: '/ranking',
        text: 'ranking',
        icon: <FaGopuram />,
    },
    {
        id: 4,
        url: '/challenge',
        text: 'challenge',
        icon: <FaIndustry />,
    },
    {
        id: 5,
        url: '/party',
        text: 'party',
        icon: <FaGifts />,
    },
    {
        id: 6,
        url: '/connect',
        text: 'connect',
        icon: <FaConnectdevelop />,
    },
    {
        id: 7,
        url: '/parade',
        text: 'parade',
        icon: <FaUsers />,
    },
    {
        id: 8,
        url: '/team',
        text: 'team',
        icon: <FaUserFriends />,
    },
];
