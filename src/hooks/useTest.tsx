import { useState } from "react";

export default function useTest() {
    const [isOpen, setIsOpen] = useState(false);
    const handleToglle = () => {
        setIsOpen((prev) => !prev);
    }

    return {
        isOpen,
        handleToglle
    }
}