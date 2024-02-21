import 'package:flutter/material.dart';
import 'package:gap/gap.dart';
import 'package:jangboo_flutter/common_widget/k_container.dart';

class EditTextField extends StatelessWidget {
  const EditTextField(
      {super.key,
      required this.ctr,
      required this.title,
      this.hintText,
      this.bgColor,
      this.onTap,
      this.onChanged,
      this.hideContent = false
      // required this.value,
      });

  final TextEditingController ctr;
  final String title;
  final String? hintText;
  final Color? bgColor;
  final GestureTapCallback? onTap;
  final ValueChanged<String>? onChanged;
  final bool? hideContent;
  // final String value;

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Padding(
          padding: const EdgeInsets.only(left: 5),
          child: Text(
            title,
            style: const TextStyle(fontWeight: FontWeight.bold),
          ),
        ),
        const Gap(5),
        KContainer(
          color: bgColor ?? Colors.grey[100],
          child: Padding(
            padding: const EdgeInsets.symmetric(horizontal: 15),
            child: Center(
              child: TextField(
                controller: ctr,
                onTap: onTap,
                obscureText: hideContent == true ? true : false,
                onChanged: onChanged,
                decoration: InputDecoration(
                    border: InputBorder.none, hintText: hintText),
              ),
            ),
          ),
        ),
        const Gap(10),
      ],
    );
  }
}
