import { MovideDetailsResponse } from './types';
import { get } from '../shared/methods';

export async function getMovie(movieId: string): Promise<MovideDetailsResponse> {
  const { data } = await get<MovideDetailsResponse>(`movies/${movieId}`);
  return data;
}
