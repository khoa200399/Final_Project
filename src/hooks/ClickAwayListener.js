import React, { useRef, useEffect } from "react";

function useOutsideAlerter(ref, callback) {
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                callback()
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [callback, ref]);
}

export default function ClickAwayListener({ onClickAway, ...rest }) {
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, onClickAway);

    return <div ref={wrapperRef}>{rest.children}</div>;
}