#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from selenium.webdriver.firefox.webdriver import WebDriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
import json
import re
import os.path as path

wd = WebDriver()
wd.implicitly_wait(10)
participants = [
    {'name': 'Abdalmajid Abdalla', 'username': 'majidsd'},
    # {'name': 'Ahmed Taj elsir', 'username': 'ahmed-taj'},
    {'name': 'Amr Abd Alkrim Hassan', 'username': 'wizmoori'},
    {'name': 'Ameenah', 'username': 'ameenah'},
    {'name': 'emanjodoo', 'username': 'emanjodoo'},
    {'name': 'Eman saeed', 'username': 'emansaeed'},
    {'name': 'Ibrahim Omer', 'username': 'ibrahimomer'},
    {'name': 'Majid CJ', 'username': 'majid-cj'},
    {'name': 'mohannad waheed', 'username': 'mohannadprogrammer'},
    {'name': 'Montaser', 'username': 'montaz7'},
    {'name': 'Obay Hamed', 'username': 'obayhamed'},
    {'name': 'ProjectDeveloper323', 'username': 'ProjectDeveloper323'},
    {'name': 'RehamElhadi', 'username': 'RehamElhadi'},
    {'name': 'Trteel', 'username': 'Tarteel'},
    {'name': 'wiamosman', 'username': 'wiamosman'},

]

pat = re.compile(r"2017-02-[05|06|07|08|09|10|11|12|13|14|15|16|17|18|19]")


def by_contest_days(el):
    if pat.match(el.get_attribute('data-date')):
        return True
    return False

try:
    for p in participants:
        wd.get(
            "https://github.com/users/{}/contributions".format(p['username'])
        )
        elements = wd.find_elements_by_css_selector('[data-date*="2017-02-"]')
        elements = filter(by_contest_days, elements)
        p['total_cont'] = sum(
            [int(el.get_attribute('data-count'))
             for el in elements]
        )
    target_file = open(
        path.join(
            path.dirname(__file__),
            'src',
            'app',
            'participants.json'),
        'w'
    )
    target_file.write(json.dumps(participants))
    target_file.close()

finally:
    wd.quit()
