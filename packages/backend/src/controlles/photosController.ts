import { Request, Response } from 'express';
import Photo from '../models/photos';

// // Get all photos
// export const getPhotos = async (req: Request, res: Response) => {
//     try {
//         const photos = await Photo.findAll();
//         res.status(200).json(photos);
//     } catch (error) {
//         res.status(500).json({ message: 'Error fetching photos', error });
//     }
// }

// // add new photo
// export const addPhoto = async (req: Request, res: Response) => {
//     try {
//         const { title, url } = req.body;
//         const newPhoto = await Photo.create({ title, url });
//         res.status(201).json(newPhoto);
//     } catch (error) {
//         res.status(500).json({ message: 'Error adding photo', error });
//     }