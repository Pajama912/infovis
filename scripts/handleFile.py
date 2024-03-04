def addStrLeft(src_file: str, dst_file:str, text: str):
    with open(src_file, 'r') as src, open(dst_file, 'a') as dst:
        for line in src:
            dst.write(text+line)