import argparse
import deepl
import os
import sys

parser=argparse.ArgumentParser()

parser.add_argument('--key', help='Deepl API Key')
parser.add_argument('--path', help='The path to search for markdown files')
parser.add_argument('-d', dest='dryrun', help='Dryrun', action='store_true')
args=parser.parse_args()

if not args.key:
    print('Missing API Key --key=<key>')
elif not args.path:
    print('Missing path to files --path=<path>')
else:
    translator = deepl.Translator(args.key)

    for dirpath, dnames, fnames in os.walk(args.path):
        for f in fnames:
            if f.endswith('en.md'):
                srcPath = os.path.join(dirpath, f)
                print('Trad : ' + srcPath)
                with open(srcPath) as src:
                    s = src.read()
                    targetPath = srcPath.replace('.en.md', '.fr.md')
                    print('Out : ' + targetPath)
                    if not args.dryrun:
                        result = str(translator.translate_text(
                            s,
                            target_lang="FR",
                            tag_handling="xml",
                            ignore_tags=['img', 'a']
                        ))
                        with open(targetPath, 'w') as out:
                            out.write(result)
