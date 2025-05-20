import { useNavigate } from "react-router-dom";

export interface NavigationProps {
    backTo?: string;
    nextTo?: string;
}


export const Navigation = ({backTo, nextTo}: NavigationProps) => {
    const navigate = useNavigate();

    return (
        <div className="flex justify-between mt-6">
            {backTo &&(
                <button onClick={() => navigate(backTo)} className="btn">
                    Back
                </button>
            )}
        
            {nextTo &&(
                <button onClick={() => navigate(nextTo)} className="btn">
                    Next
                </button>
            )}        
        </div>
    )
}