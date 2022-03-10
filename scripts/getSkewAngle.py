#!/usr/bin/python
import base64
import sys
import numpy as np
import cv2

encodedImage = sys.stdin.readlines()
print(encodedImage)
encodedImage = encodedImage[0].split(',')[1]
print(encodedImage)
nparr = np.frombuffer(base64.b64decode(encodedImage), np.uint8)
img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
cv2.imshow("image", img)
cv2.waitKey(0)
