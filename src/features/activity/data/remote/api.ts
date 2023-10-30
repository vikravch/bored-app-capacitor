const BASE_URL = 'https://www.boredapi.com/api'
export async function getActivity(): Promise<unknown>{
    const response = await fetch(
        BASE_URL+'/activity/');
    const res =
        await response.json()
    return res;
}
// http://www.boredapi.com/api/activity?type=recreational
export async function getActivityFromCategory(category: string): Promise<unknown>{
    const response = await fetch(
        BASE_URL+'/activity?type='+category);
    const res =
        await response.json()
    return res;
}