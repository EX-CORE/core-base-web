import { useQuery } from "@tanstack/react-query";

export default function useGetRoleMenubar() {
    return useQuery({
        queryKey: ['loginUserRole'],
        queryFn: async () => {            
            return {
                name: '요아정',
                role: 'MASTER_ADMIN'
            }
        }
    })
}