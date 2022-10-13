import os
from datetime import datetime

xmlTemplate = """<?xml version="1.0"?>
<metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
    <dc:identifier>{uid}</dc:identifier>
    <dc:type>{media}</dc:type>
    <dc:title>Is AI relevant to education ?</dc:title>
    <dc:contributor>AI4T</dc:contributor>
    <dc:subject>{keyword}</dc:subject>
    <dc:publisher>AI4T</dc:publisher>
    <dc:date>{date}</dc:date>
    <dc:publisher>AI4T</dc:publisher>
    <dc:rights>cc by 4.0</dc:rights>
    <dc:language>{lang}</dc:language>
</metadata>
"""

metadata = dict(
    uid="EU.AI4T.O1.M1.1.1.0",
    media="Text",
    keyword="keyword",
    date=datetime.now().strftime("%Y-%m-%d"),
    lang="en"
)

print(xmlTemplate.format(**metadata))

basepath = u"./docs/"
for path, dirs, files in os.walk(basepath):
    for file in files:
        filename, file_extension = os.path.splitext(file)
        if file_extension == '.md' and filename != "index":
            print(os.path.join(path, filename, '.xml'))
            with open(os.path.join(path, filename+'.xml'), 'w+') as f:
                f.write(xmlTemplate.format(**metadata))
