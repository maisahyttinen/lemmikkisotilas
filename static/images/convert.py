from PIL import Image, UnidentifiedImageError
import os
import glob


image_list = []
for filename in glob.glob('./*.png'):  # assuming gif
    try:
        im = Image.open(filename)

        new_filename = filename.split("./")[1].split(".png")[0]

        print(new_filename)
        rgb_im = im.convert('RGB')
        rgb_im.save('./{}.jpg'.format(new_filename))

        os.remove(filename)

    except UnidentifiedImageError:
        print("exception!")
        print(filename)
