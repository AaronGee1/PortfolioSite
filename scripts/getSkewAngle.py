#!/usr/bin/python
import base64
import sys
import numpy as np
import cv2


def sortContourArea(contour):
    return cv2.contourArea(contour)


image_64_encode = sys.argv[1]
print(image_64_encode)

# # encodedImage = sys.stdin.readlines()

# # encodedImage = encodedImage[0].split(',')[1]
# encodedImage = encodedImage.split(',')[1]

# nparr = np.frombuffer(base64.b64decode(encodedImage), np.uint8)
# img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

# grayImg = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
# cv2.imshow("image", grayImg)
# cv2.waitKey(0)
# blurImg = cv2.GaussianBlur(grayImg, (0, 0), 5.0)
# cv2.imshow("image", blurImg)
# cv2.waitKey(0)
# unsharpImg = cv2.addWeighted(grayImg, 0.5, blurImg, 0.5, 0.0)
# cv2.imshow("image", unsharpImg)
# cv2.waitKey(0)
# ret, unsharpImg = cv2.threshold(
#     unsharpImg, 125, 255, cv2.THRESH_BINARY_INV)
# cv2.imshow("image", unsharpImg)
# cv2.waitKey(0)
# kernel = np.ones((30, 30), np.uint8)

# dilateImg = cv2.dilate(unsharpImg, kernel)
# cv2.imshow("image", dilateImg)
# cv2.waitKey(0)
# contours, hierarchy = cv2.findContours(
#     dilateImg, cv2.RETR_LIST, cv2.CHAIN_APPROX_SIMPLE)

# sortedContours = sorted(contours, key=lambda area: cv2.contourArea(area))

# minAreaBoxArray = []

# for c in contours:
#     if(cv2.contourArea(c) > 1000):
#         cv2.drawContours(img, [c], 0, (0, 255, 0), 3)
#         minAreaBoxArray.append(cv2.minAreaRect(c))
#         rect = cv2.minAreaRect(c)
#         box = cv2.boxPoints(rect)
#         box = np.int0(box)
#         cv2.drawContours(img, [box], 0, (0, 0, 255), 2)


# angle = minAreaBoxArray[0][2]

# print(angle)
# if angle < -45:
#     print(1.0 * (90 + angle))
# else:
#     print(angle)

# cv2.imshow("image", img)
# cv2.waitKey(0)
