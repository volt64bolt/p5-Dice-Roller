from PIL import Image
from PIL import ImageFont
from PIL import ImageDraw 

width = 128
height = 128

def create_image(size, bgColor, message, font, fontColor):
    W, H = size
    image = Image.new('RGB', size, bgColor)
    draw = ImageDraw.Draw(image)
    _, _, w, h = draw.textbbox((0, 0), message, font=font)
    draw.text(((W-w)/2, (H-h)/2), message, font=font, fill=fontColor)
    return image

count = input('how many files\n')
for i in range(int(count)):
        #open('dice' + str(i) + '.jpg', "w")
        #img = Image.new(mode = "RGB", size = (width, height))
        #draw = ImageDraw.Draw(img)
        font = ImageFont.truetype("Roboto-Medium.ttf", 64)
        #draw.text((0, 0), str(i), (255, 255, 255), font=font)

        img = create_image((128, 128), (242,238,201), str(i), font, 'black')
        #img.show()
        img.save('dice' + str(i) + '.jpg')
